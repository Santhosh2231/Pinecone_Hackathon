
from flask import request,Response
from flask_restful import Resource
import numpy as np
import json
import base64
import io
from PIL import Image
import torch
import torchvision
from torchvision import models, transforms
import pinecone
from pathlib import Path

model = models.squeezenet1_1(pretrained=True)
model = model.eval()

import pandas as pd
path= Path.cwd()
path = str(path)+"\\controllers\\"+"dataDesc.csv"
data = pd.read_csv(path)


data_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

class cropdisease(Resource):
    def post(self):
        imageData = request.form['image']
        base64_string = imageData.split(",")[1]
        # print(base64_string)
        decoded_bytes = base64.b64decode(base64_string)

        # Create BytesIO object
        image_bytes = io.BytesIO(decoded_bytes)

        # Open the image using PIL
        image = Image.open(image_bytes)
        image.resize((224,224));
        prepr = data_transforms(image).unsqueeze(0)
        query_embedding = model(prepr).tolist()
        pinecone.init(api_key="63838b1c-9e84-4786-b0b5-0e87aa3b93d0", environment='asia-northeast1-gcp')
        index = pinecone.Index(index_name="image-search")
        response = index.query(query_embedding, top_k=4, include_metadata=True)

        json_data = data.to_json(orient='records')

        json_data = json.loads(json_data)
        res = {}
        for entry in json_data:
            vector_id = entry["Id"]
            metadata = {k: v for k, v in entry.items() if k != "Id"}
            res[vector_id] = metadata


        results = []
        labels = []
        # print(res.keys)
        for result in response['matches']:
            if "healthy" not in result['metadata']['label']:
                key = result['metadata']['label']
                try:
                    if key not in labels:
                        labels.append(key)
                        results.append({"status":1,"score":round(result['score'], 3),"result":res[key]})
                except:
                    pass
            else:
                results = []
                results.append({"status":0,"score":round(result['score'], 3)})
                break;
        # response = json.dumps(response)
        # print(results)
    
        return {"response":results}


    def get(self):
        crop_diseases = {}
        for i in data['crop'].unique().tolist():
            crop_diseases[i] = json.loads(data[data['crop'] == i].to_json(orient='records'))
        return {"response":crop_diseases};
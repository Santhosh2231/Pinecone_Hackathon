
from flask import request,Response
from flask_restful import Resource
import numpy as np
import json
from pathlib import Path


import pandas as pd
path= Path.cwd()
path = str(path)+"\\controllers\\"+"dataDesc.csv"
data = pd.read_csv(path)

class disease(Resource):
    def get(self,name):
        dataVal = json.loads(data[data['Id'] == name].to_json(orient='records'))

        return {"response":dataVal};
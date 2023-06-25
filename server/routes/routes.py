import sys
 # setting path
sys.path.append('../controllers')

from controllers.similarityDisease import cropdisease
from controllers.disease import disease

def crop_prediction_routes(api):
    api.add_resource(cropdisease, '/api/cropdisease')
    api.add_resource(disease,'/api/disease/<name>')

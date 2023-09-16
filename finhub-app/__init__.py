import os
from flask import Flask, render_template, jsonify, request
from flask_restful import Resource, Api, reqparse


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    
    api = Api(app)

    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, required=True, help='Name is required.')
    parser.add_argument('age', type=int, required=True, help='Age is required.')

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from .web.web import web_blueprint
    app.register_blueprint(web_blueprint)

  
    class GraphData(Resource):
        def get(self):

            # going to have to validate requests eventually
            '''
            # if request.args.keys == ['monthly_amt', "init_amt","time_pd"]:
            #     pass  
            # else:
            #     return "403 forbidden"
            '''

            monthly_amt = request.args.get("monthly_amt") # this is monthly addition to savings
            init_amt = request.args.get("init_amt") # this is initial savings
            time_in_months = request.args.get("time_pd")    #convert years to months

            time_in_months = int(time_in_months) * 12
            init_amt = int(init_amt)
            monthly_amt = int(monthly_amt)

            init_array = [i for i in range(time_in_months + 1)]

            def compound(init_amt, monthly_amt, init_array, compounding_perct):
                result = []
                for index, val in enumerate(init_array):
                    if val != 0:
                        entry = (result[index-1] + monthly_amt ) * compounding_perct
                        result.append(entry)
                    else:
                        entry = (init_amt + monthly_amt) * compounding_perct
                        result.append(entry)

                return result


            spx_performance = compound(init_amt=init_amt, monthly_amt=monthly_amt, 
                                       init_array=init_array, compounding_perct=1.00694) #snp perf approx 8.33% annualized -> 0.069%/mnth
            
            cd_performance = compound(init_amt=init_amt, monthly_amt=monthly_amt,
                                      init_array=init_array, compounding_perct=1.001667)
            
            #add different etfs?
            

            


            return {"SnP_perf": spx_performance, "cd_perf":cd_performance}
            

            
        
    api.add_resource(GraphData, "/graph")
    
    
    return app
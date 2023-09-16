from flask import Blueprint, request, jsonify
from ..models.graph import compound


graph_blueprint = Blueprint("graph", __name__)

@graph_blueprint.route("/", methods=["GET"])
def get():
     # going to have to validate requests eventually
    '''
    # if request.args.keys == ['monthly_amt', "init_amt","time_pd"]:
    #     pass  
    # else:
    #     return "403 forbidden"
    '''

    monthly_amt = request.args.get("monthly_amt") # this is monthly addition to savings
    init_amt = request.args.get("init_amt") # this is initial savings
    time_in_months = request.args.get("time_pd") #convert years to months

    time_in_months = int(time_in_months) * 12
    init_amt = int(init_amt)
    monthly_amt = int(monthly_amt)

    init_array = [i for i in range(time_in_months + 1)]

    spx_performance = compound(init_amt=init_amt, monthly_amt=monthly_amt, 
                                init_array=init_array, compounding_perct=1.00694) #snp perf approx 8.33% annualized -> 0.069%/mnth
    
    cd_performance = compound(init_amt=init_amt, monthly_amt=monthly_amt,
                                init_array=init_array, compounding_perct=1.001667)
    
    return {"SnP_perf": spx_performance, "cd_perf":cd_performance}
        
from flask import Blueprint, request, jsonify
from ..models.gpt import ask_gpt

tips_blueprint = Blueprint("tips", __name__)

@tips_blueprint.route("/", methods=["GET"])
def generate_tips():
    # Kept getting an answer related to creating a budget so had to modify the prompt to make it more inclusive of other strategies
    gpt_answer = ask_gpt(f"In 1-2 sentences, give me a random tip that could help me make better decisions when it comes to handling my personal finances. Do not include any tips that mention a budget.")
    return gpt_answer
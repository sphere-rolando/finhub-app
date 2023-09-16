from flask import Blueprint, request, jsonify
from ..models.gpt import ask_gpt

tips_blueprint = Blueprint("tips", __name__)

@tips_blueprint.route("/<subject>", methods=["GET"])
def generate_tips(subject):
    gpt_answer = ask_gpt(f"Act as if you were an advisor. Give me a tip in regard to {subject}")
    return gpt_answer
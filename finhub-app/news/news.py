from flask import Blueprint, jsonify
from ..models.news import get_news

news_blueprint = Blueprint("news", __name__)

@news_blueprint.route("/<limit>", methods=["GET"])
def retrieve_news(limit):
    return jsonify(get_news(int(limit)))
import os
from flask import Flask
from .tips.tips import tips_blueprint
from .news.news import news_blueprint

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def index():
        return 'Hello, World!'
    
    app.register_blueprint(tips_blueprint, url_prefix="/api/tips")
    app.register_blueprint(news_blueprint, url_prefix="/api/news")

    return app
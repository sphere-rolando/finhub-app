import os
from flask import Flask
from .models.gpt import ask_gpt

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def index():
        return 'Hello, World!'
    
    @app.route("/api/tips/<subject>")
    def generate_tips(subject):
        gpt_answer = ask_gpt(f"Act as if you were an advisor. In just one or two sentences, give me a tip in regard to {subject}")
        return gpt_answer

    return app
from flask import Blueprint, render_template

web_blueprint = Blueprint(
    "web",
    __name__,
    static_url_path="/",
    static_folder="../frontend/static",
    template_folder="../frontend/static/templates",
)

@web_blueprint.route("/")
def home(path=None):
    "Renders the index html page"
    return render_template("index.html")
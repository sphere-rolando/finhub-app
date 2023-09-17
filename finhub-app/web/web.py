from flask import Blueprint, render_template

web_blueprint = Blueprint(
    "web",
    __name__,
    static_url_path="/",
    static_folder="../frontend/public",
    template_folder="../frontend/public",
)

@web_blueprint.route("/")
def home(path=None):
    "Renders the index html page"
    return render_template("index.html")
# routes/porjects_routes.py
from flask import Blueprint, render_template

projects = Blueprint('projects', __name__, url_prefix='')

@projects.route('/projects')
def projects_page():
    return render_template('projects.html')

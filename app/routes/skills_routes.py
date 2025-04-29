# routes/skills_routes.py
from flask import Blueprint, render_template

skills = Blueprint('skills', __name__, url_prefix='')

@skills.route('/skills')
def skill_page():
    return render_template('skills.html')

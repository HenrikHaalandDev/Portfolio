# routes/menu_routes.py
from flask import Blueprint, render_template

menu = Blueprint('menu', __name__, url_prefix='')

@menu.route('/menu')
def menu_page():
    return render_template('menu.html')

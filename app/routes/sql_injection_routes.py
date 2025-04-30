# routes/sql_injection_routes.py
from flask import Blueprint, render_template

sqlInjection = Blueprint('sql_injection', __name__, url_prefix='')

@sqlInjection.route('/sql_injection')
def sqlInjection_page():
    return render_template('sql_injection.html')

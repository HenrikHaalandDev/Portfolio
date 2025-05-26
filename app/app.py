from flask import Flask
from flask_login import LoginManager
from waitress import serve
import logging

from my_secret import SECRET_KEY
from modules import User
from routes.home_routes import home
from routes.skills_routes import skills
from routes.sql_injection_routes import sqlInjection
from routes.menu_routes import menu
from routes.projects_routes import projects
from routes.loginSystem_routes import loginSystem

# Setup logging
logging.basicConfig(level=logging.INFO)
logging.getLogger('waitress').setLevel(logging.INFO)
logger = logging.getLogger(__name__)

# Flask app setup
app = Flask(__name__)
app.secret_key = SECRET_KEY

# Flask-Login setup
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'loginSystem.login'

@login_manager.user_loader
def load_user(user_id):
    return User.get_user_by_id(user_id)

# Register blueprints
app.register_blueprint(home)
app.register_blueprint(skills)
app.register_blueprint(sqlInjection)
app.register_blueprint(menu)
app.register_blueprint(projects)
app.register_blueprint(loginSystem)

# Run app using Waitress
if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=8080)

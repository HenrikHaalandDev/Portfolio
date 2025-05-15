from flask import Flask
from my_secret import SECRET_KEY
from routes.home_routes import home
from routes.skills_routes import skills
from routes.sql_injection_routes import sqlInjection
from routes.menu_routes import menu
from routes.projects_routes import projects
from routes.loginSystem_routes import loginSystem
from flask_login import LoginManager
from modules import User

app = Flask(__name__)
app.secret_key = SECRET_KEY

app.register_blueprint(home)
app.register_blueprint(skills)
app.register_blueprint(sqlInjection)
app.register_blueprint(menu)
app.register_blueprint(projects)
app.register_blueprint(loginSystem)


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'loginSystem.login'

@login_manager.user_loader
def load_user(user_id):
    return User.get_user_by_id(user_id)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

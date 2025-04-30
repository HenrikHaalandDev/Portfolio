from flask import Flask
from my_secret import SECRET_KEY
from routes.home_routes import home
from routes.skills_routes import skills
from routes.sql_injection_routes import sqlInjection


app = Flask(__name__)
app.secret_key = SECRET_KEY

app.register_blueprint(home)
app.register_blueprint(skills)
app.register_blueprint(sqlInjection)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

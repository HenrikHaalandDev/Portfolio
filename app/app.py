from flask import Flask
from my_secret import SECRET_KEY
from routes.home_routes import home


app = Flask(__name__)
app.secret_key = SECRET_KEY

app.register_blueprint(home)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)

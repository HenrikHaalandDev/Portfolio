# routes/home_routes.py
from flask import Blueprint, render_template, request, redirect, url_for, session, flash

home = Blueprint('home', __name__, url_prefix='')
@home.route('/')
def home_page():
    return render_template('home.html')

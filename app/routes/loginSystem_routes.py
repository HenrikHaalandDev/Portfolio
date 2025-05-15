from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_user, login_required, logout_user, current_user
from modules import User, bcrypt

loginSystem = Blueprint('loginSystem', __name__, url_prefix='')


@loginSystem.route('/loginSystem', methods=['GET', 'POST'])
def loginSystem_page():
    if current_user.is_authenticated:
        # Show dashboard if logged in
        return render_template('loginSystem.html')

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        form_action = request.form.get('form_action')

        if form_action == 'login':
            user = User.get_user_by_email(email)
            if user and bcrypt.check_password_hash(user.password, password):
                login_user(user)
                return redirect(url_for('loginSystem.loginSystem_page'))
            else:
                flash('Invalid email or password', 'danger')

        elif form_action == 'register':
            if User.get_user_by_email(email):
                flash('Email already taken', 'warning')
            else:
                User.register_user(email, password)
                flash('Registration successful! Please log in.', 'success')

    return render_template('loginSystem.html')


@loginSystem.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    flash("You have been logged out.", "success")
    return redirect(url_for('loginSystem.loginSystem_page'))

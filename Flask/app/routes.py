import os
import smtplib
from flask import render_template, url_for, flash, redirect, request, jsonify
from app import app, db, mail
from app.forms import RegistrationForm, LoginForm, RequestResetForm, ResetPasswordForm, PredictForm
from app.models import User
from flask_login import login_user, current_user, logout_user, login_required
from flask_mail import Message
import pickle
import numpy as np
from passlib.hash import sha256_crypt

#importing pickle files
dt = pickle.load(open("dt.pickle", "rb"))
lr = pickle.load(open("lr.pickle", "rb"))
gb = pickle.load(open("gb.pickle", "rb"))
mlp = pickle.load(open("mlp.pickle", "rb"))

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html', title='About Page')

#Sgn up method for web
@app.route("/register", methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RegistrationForm()

    if form.validate_on_submit():
        hashed_password = sha256_crypt.encrypt(str(form.password.data)) #encrypts the password
        user = User(name=form.name.data, email=form.email.data, username=form.username.data, password=hashed_password)
        db.session.add(user) #adds the user
        db.session.commit()
        flash('Account created!', 'success')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

#sign up method for mobile app
@app.route("/signup", methods=['GET', 'POST'])
def signup():
    user =  User.query.filter_by(username=request.get_json(force=True)['username']).first()  #gets username from json
    email = User.query.filter_by(email=request.get_json(force=True)['email']).first() #gets email from json
    #checks if the username and email is already registered
    if user:
        return jsonify({'message' : 'Username Already registered','success' : 0})
    elif email:
         return jsonify({'message' : 'Email Already registered','success' : 2})
    else:
        hashed_password = sha256_crypt.encrypt(str(request.get_json(force=True)['password']))
        print(hashed_password)
        user = User(name=request.get_json(force=True)['name'], email=request.get_json(force=True)['email'], username=request.get_json(force=True)['username'], password=hashed_password)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'Now login ', 'success' : 1})
    return jsonify({'message': 'Signup Successful'}) 

# login method for web
@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = LoginForm()

    if form.validate_on_submit():
        user=User.query.filter_by(username=form.username.data).first() #gets the first username that matches the username entered in login
        if user and sha256_crypt.verify(form.password.data, user.password):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Login Unsuccessful', 'danger')
    return render_template('login.html', title='Login', form=form)

#login method for mobile app
@app.route("/apilogin", methods=['GET', 'POST'])
def apilogin():
    user=User.query.filter_by(username=request.get_json(force=True)['username']).first()
    if user and sha256_crypt.verify(request.get_json(force=True)['password'], user.password):
        login_user(user)
        return jsonify({'message': 'Login successful', 'success':1})
    else:
        return jsonify({'message': 'Login Failed','success': 0})
    return jsonify({'message': 'Login successful'})

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route("/dashboard")
@login_required
def dashboard():
    return render_template('dashboard.html', title='Dashboard')

# this method sends email to the user.
def send_reset_email(user):
    token = user.get_reset_token()
    msg = Message('Password Reset Request', sender='insanesssuwal3@gmail.com', recipients=[user.email])
    msg.body = f'''To reset your password, visit the following link:
{url_for('reset_token', token=token, _external=True)}

If you did not make this request then simply ignore this email.
'''
    mail.send(msg)

# send email method for web app.
@app.route("/reset_password", methods=['GET', 'POST'])
def reset_request():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RequestResetForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        send_reset_email(user) # method to send mail
        flash('Email has been sent', 'info')
        return redirect(url_for('login'))
    return render_template('reset_request.html', title='Reset Password', form=form)

# send email method for mobile app
@app.route("/forget", methods=['GET', 'POST'])
def forget():
    user = User.query.filter_by(email=request.get_json(force=True)['email']).first()
    if user:
        send_reset_email(user)
        return jsonify({'success': 1})
    else:
        return jsonify({'success': 0})
    return jsonify({'message': 'Now login '}) 

@app.route("/reset_password/<token>", methods=['GET', 'POST'])
def reset_token(token):
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    user = User.verify_reset_token(token)
    #for token expiration
    if user is None:
        flash('That is an invalid or expired token', 'warning')
        return redirect(url_for('reset_request'))
    form = ResetPasswordForm()
    if form.validate_on_submit():
        hashed_password = sha256_crypt.encrypt(str(form.password.data))
        user.password = hashed_password
        db.session.commit()
        flash('Password has been changed!', 'success')
        return redirect(url_for('login'))
    return render_template('reset_token.html', title='Reset Password', form=form)

# directs to the result page  
@app.route('/predict')
def PredictHeartDisease():
    form = PredictForm()
    return render_template('predict.html', title='Predict',form=form)

# predict logic for web app
@app.route('/result', methods=['GET', 'POST'])
def result():
        if request.method == 'POST':
            data = request.form.to_dict()
            predict_request = [[data['age'], data['sex'], data['cp'],data['resting_bp'],data['serum_cholestrol'],data['fasting_blood_sugar'],data['resting_ecg'],data['max_heart_rate'],data['exercise_induced_angina'],data['st_depression'],data['st_slope'],data['number_of_vessels'],data['thallium_scan_results']]]
            n = np.array(predict_request) #converting to numpy array
            n=n.astype(np.float) #converting the values to float

            y_hat = dt.predict(n)
            alg1 = (y_hat[0].tolist())

            x_hat = lr.predict(n)
            alg2 = (x_hat[0].tolist())

            z_hat = gb.predict(n)
            alg3 = (z_hat[0].tolist())

            w_hat = mlp.predict(n)
            alg4 = (w_hat[0].tolist())

            print(data)
            print(predict_request)
            print(n)
            print(alg1)
            print(alg2)
            print(alg3)
            print(alg4)

            result = {
                'alg1':alg1,
                'alg2':alg2,
                'alg3':alg3,
                'alg4':alg4
            }
            
            return render_template("result.html",title='Result', result = result)

#predict method for mobile app
@app.route('/apipredict', methods=['GET', 'POST'])
def apipredict():
    print("Got new request")
    if request.method == 'POST':
        data = request.get_json(force=True)
        print(data)
        predict_request =[[data['age'], data['sex'], data['chestPain'],data['restingBp'],data['cholestrol'],data['bloodSugar'],data['restEcg'],data['maxHR'],data['angina'],data['depression'],data['slope'],data['coloredVessel'],data['thal']]]
        print(predict_request)
        n = np.array(predict_request)
        n=n.astype(np.float)
        
        y_hat = dt.predict(n)
        alg1 = (y_hat[0].tolist())

        x_hat = lr.predict(n)
        alg2 = (x_hat[0].tolist())

        z_hat = gb.predict(n)
        alg3 = (z_hat[0].tolist())

        w_hat = mlp.predict(n)
        alg4 = (w_hat[0].tolist())
        
        print(alg1)
        print(alg2)
        print(alg3)
        print(alg4)

    return jsonify({'success': 1,'data': {'alg1': alg1, 'alg2':alg2, 'alg3':alg3, 'alg4':alg4}})
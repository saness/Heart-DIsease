import os
import smtplib
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'secret123'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/heartdiseaseapp' #migrating sqlalchemy to mysql
app.config['SQLALCHEMY_TRACK_NOTIFUCATIONS'] = False
db = SQLAlchemy(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

# for reset password mail functionality
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'sanishsuwal3@gmail.com'
app.config['MAIL_PASSWORD'] = 'sagedeathbat1234#'
mail = Mail(app)

from app import routes
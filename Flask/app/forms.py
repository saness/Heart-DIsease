from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField, FloatField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, Email, EqualTo, ValidationError,NumberRange, Regexp
from app.models import User

class RegistrationForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=1, max=50)])
    username = StringField('Username', validators=[DataRequired(), Length(min=4, max=25)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired()])
    confirm= PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')

    #checks if the username is already registered
    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('Username is taken. Please choose another one')

    #checks if the email is already registered
    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('Email is taken. Please choose another one')

class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=1, max=50)])
    password = PasswordField('Password', validators = [DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

class PredictForm(FlaskForm):
    age = IntegerField('Age (Years):', validators =[DataRequired(), NumberRange(min=1, max=3)])
    sex = SelectField('Sex:', choices = [('0', 'Female'),('1','Male')])
    cp = SelectField('Chest Pain:',choices = [('1', 'Typical Angina'),('2','ATypical Angina'),('3','Non-Angina'),('4','Asymptomatic')])
    resting_bp = IntegerField('Resting Blood Pressure(mmHg):', validators =[DataRequired(), NumberRange(min=1, max=3)])
    serum_cholestrol = IntegerField('Serum Cholesterol (mg/dl):', validators =[DataRequired(), NumberRange(min=1, max=3)])
    fasting_blood_sugar = SelectField('Fasting Blood Sugar > 120 mg/dl:', choices = [('0', 'False'),('1','True')])
    resting_ecg = SelectField('Resting ECG:',  choices = [('0', 'Normal'),('1','Abnormality'),('2','Hypertrophy')])
    max_heart_rate = IntegerField('Maximum Heart Rate', validators =[DataRequired(), NumberRange(min=1, max=3)])
    exercise_induced_angina = SelectField('Exercise Induced Angina', choices = [('0', 'No'),('1','Yes')])
    st_depression = IntegerField('ST Depression Induced', validators =[DataRequired(), NumberRange(min=1, max=3)])
    st_slope = SelectField('Slope of peak exercise ST segment:', choices = [('1', 'Unsloping'),('2','FLat'),('3','Downsloping')])
    number_of_vessels = SelectField('Number of Colored Vessel by flourosopy:', choices = [('0', 'None'),('1','One'),('2','Two'),('3','Three')])
    thallium_scan_results = SelectField('Thallium Scan Results:', choices = [('3', 'Normal'),('6','Fixed Defect'),('7','Non reversible Defect')])
    submit = SubmitField('Predict')


class RequestResetForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Request Password Reset')

    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user is None:
            raise ValidationError('There is no account with that Email. You must register first')

class ResetPasswordForm(FlaskForm):
    password = PasswordField('Password', validators = [DataRequired()])
    confirm= PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Reset Password')

    
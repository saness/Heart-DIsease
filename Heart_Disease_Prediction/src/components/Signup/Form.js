import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native'; 

import {changeName ,changeEmail, changeUsername, changePassword, changeConfirmPassword} from '../../actions/SignupActions';

import UserInput from './UserInput';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      showConfirmPassword: true,
      press: false,
      confirmPasswordPress: false
    };
  }

  showPassword = () => {
    this.state.press === false
      ? this.setState({showPassword: false, press: true})
      : this.setState({showPassword: true, press: false});
  }

  showConfirmPassword = () => {
    this.state.confirmPasswordPress === false
      ? this.setState({showConfirmPassword: false, confirmPasswordPress: true})
      : this.setState({showConfirmPassword: true, confirmPasswordPress: false});
  }


  nameChanged = value => this.props.changeUserName(value);
  emailChanged = value => this.props.changeUserEmail(value);
  usernameChanged = value => this.props.changeUserUsername(value);
  passwordChanged = value => this.props.changeUserPassword(value);
  confirmPasswordChanged = value => this.props.changeUserConfirmPassword(value);

  render() {
    return (
      <View style={styles.mainView}>
      <Text style={styles.text}>Sign Up</Text>
      <ScrollView style={styles.scrollview}>
      <KeyboardAvoidingView  behavior="padding" style={styles.container} enabled>
        <UserInput
          source={usernameImg}
          placeholder="Name"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          value={this.props.name}
          onChangeText = {this.nameChanged}
        />


        <UserInput
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          value={this.props.email}
          onChangeText = {this.emailChanged}
        />

        <UserInput
          source={usernameImg}
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          value={this.props.username}
          onChangeText = {this.usernameChanged}
        />

        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showPassword}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={this.props.password}
          onChangeText = {this.passwordChanged}
        />
        <UserInput
          source={passwordImg}
          secureTextEntry={this.state.showConfirmPassword}
          placeholder="Confirm Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={this.props.confirmPassword}
          onChangeText = {this.confirmPasswordChanged}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPassword}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEyeConfirmPassword}
          onPress={this.showConfirmPassword}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'relative',
    top:-90,
    right:-140
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  scrollview: {
    marginTop: 20
  },
  mainView: {
    marginTop: 100
  },
  text: {
    color: 'white',
    textAlign:'center',
    backgroundColor: 'transparent',
    fontSize:25
  },
  btnEyeConfirmPassword: {
    position: 'relative',
    top:-70,
    right:-140
  }
});

const mapStateToProps = state => ({
  
  name: state.signup.name,
  email: state.signup.email,
  username: state.signup.username,
  password: state.signup.password,
  confirmPassword: state.signup.confirmPassword,
});

const mapDispatchToProps = dispatch => ({
  
  changeUserName: (name) => dispatch(changeName(name)),
  changeUserEmail: (email) => dispatch(changeEmail(email)),
  changeUserUsername: (username) => dispatch(changeUsername(username)),
  changeUserPassword: (password) => dispatch(changePassword(password)),
  changeUserConfirmPassword: (confirmPassword) => dispatch(changeConfirmPassword(confirmPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
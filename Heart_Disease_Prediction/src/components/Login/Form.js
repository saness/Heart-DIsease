import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native'; 

import {changeUsername, changePassword} from '../../actions/UserActions';

import UserInput from './UserInput';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false
    };
    this.showPass = this.showPass.bind(this);
  }

  showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  }

  passwordChanged = value => this.props.changeUserPassword(value);

  usernameChanged = value => this.props.changeUserUsername(value);

  render() {
    return (
      <ScrollView>
      <KeyboardAvoidingView  behavior="padding" style={styles.container} enabled>
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
          secureTextEntry={this.state.showPass}
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={this.props.password}
          onChangeText = {this.passwordChanged}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.showPass}>
          <Image source={eyeImg} style={styles.iconEye} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ScrollView>
      
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
    top:-45,
    right:-140
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});

const mapStateToProps = state => ({
  username: state.user.username,
  password: state.user.password
});

const mapDispatchToProps = dispatch => ({
  changeUserUsername: (username) => dispatch(changeUsername(username)),
  changeUserPassword: (password) => dispatch(changePassword(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
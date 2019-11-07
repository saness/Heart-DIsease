import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native'; 

import { changeEmail} from '../../actions/ForgetActions';

import UserInput from './UserInput';

import usernameImg from '../images/username.png';


class Form extends Component {
  constructor(props) {
    super(props);
  }

  emailChanged = value => this.props.changeUserEmail(value);

  render() {
    return (
      <View style={styles.mainView}>
      <Text style={styles.text}>Forgot Password</Text>
      <ScrollView style={styles.scrollview}>
      <KeyboardAvoidingView  behavior="padding" style={styles.container} enabled>
        
        <UserInput
          source={usernameImg}
          placeholder="Email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          value={this.props.email}
          onChangeText = {this.emailChanged}
        />

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
    right:-160
  }
});

const mapStateToProps = state => ({
  email: state.forget.email,
});

const mapDispatchToProps = dispatch => ({
  changeUserEmail: (email) => dispatch(changeEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
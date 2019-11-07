import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';

export default class SignupSection extends Component {

  createAccountPressed = () => {
    this.props.navigate('Signup');
  }

  forgotPasswordPressed = () => {
    this.props.navigate('Forget');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} 
          onPress = {this.createAccountPressed}>
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress = {this.forgotPasswordPressed}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 5,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  button: {
    height: 30
  }
});

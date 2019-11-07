import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import {signup} from '../../actions/SignupActions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

class ButtonSubmit extends Component {

  constructor(props) {
    super(props);
  }

  _onPress = () => {
    if (this.props.name.trim() != ''){
      if(this.props.email.trim() != '') {
        if(this.props.username.trim() != ''){
          if(this.props.password.trim() != ''){
            if(this.props.confirmPassword.trim() != ''){
              if(this.props.confirmPassword == this.props.password){
                console.log("reading user data... button submit onpress")
                const userDetails = {
                  name: this.props.name,
                  email: this.props.email,
                  username:this.props.username,
                  password: this.props.password,
                }
                console.log("read user data " + userDetails)
                this.props.signupUser(userDetails);
              } else {
                alert('Password and Confirm Password dont match.')
              }
            } else {
              alert('Please enter Confirm Password')
            }
          } else {
            alert('Please enter Password')
          }
        } else {
          alert('Please enter Username')
        }
      } else {
        alert('Please enter Email')
      }
    } else {
      alert('Please enter Name')
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
              <Text style={styles.text}>SIGN UP</Text>
          </TouchableOpacity>
        
      </View>
    );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00829C',
    height: MARGIN,
    width: DEVICE_WIDTH - MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});

ButtonSubmit.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({

  name: state.signup.name,
  email: state.signup.email,
  username: state.signup.username,
  password: state.signup.password,
  confirmPassword: state.signup.confirmPassword
});

const mapDispatchToProps = dispatch => ({
  signupUser: (userDetails) => dispatch(signup(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubmit);

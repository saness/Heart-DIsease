import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import spinner from '../images/loading.gif';
import {login} from '../../actions/UserActions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.spinValue = new Animated.Value(0)
  }

  onPress =() =>{
    if(this.props.username.trim() != '' )
    {
      if(this.props.password.trim() != '')
      {
        if (this.state.isLoading) return;

        this.setState({isLoading: true});
        this.spin();
        const userDetails  ={
          username: this.props.username,
          password: this.props.password
        };
        console.log("login pressed")
        this.props.loginUser(userDetails);
        console.log("after dispatching login")
      }
      else {
        alert('Please enter your Password')
      }
    } else {
      alert('Please Enter Your Username')
    }

    setTimeout(() => {
      this.setState({isLoading: false});
      this.spinValue.setValue(0);
    }, 2000);
    console.disableYellowBox = true;
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
      {this.state.isLoading ? (
              <Animated.Image
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'transparent',
                transform: [{rotate: spin}] }}
                source={spinner}
            />
            ) : (
            
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            activeOpacity={1}>
              <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
            )
      }
        
      </View>
    );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -50,
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  username: state.user.username,
  password: state.user.password
});

const mapDispatchToProps = dispatch => ({
  loginUser: (userDetails) => dispatch(login(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubmit);

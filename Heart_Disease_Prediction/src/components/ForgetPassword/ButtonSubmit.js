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

import {forget} from '../../actions/ForgetActions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

class ButtonSubmit extends Component {

  constructor(props) {
    super(props);
  }

  _onPress = () => {
    if(this.props.email != '')
    {
      console.log("reading user data... button submit onpress")
      const forgetDetails = {
        email: this.props.email,
      }
      console.log("read user data " + forgetDetails)
      this.props.forgetUser(forgetDetails);
    } else {
      alert('Please enter Email.')
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
              <Text style={styles.text}>Send Mail</Text>
          </TouchableOpacity>
        
      </View>
    );
    }
    
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    alignItems: 'center',

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
});

ButtonSubmit.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  email: state.forget.email,
});

const mapDispatchToProps = dispatch => ({
  forgetUser: (forgetDetails) => dispatch(forget(forgetDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSubmit);

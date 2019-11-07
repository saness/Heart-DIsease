import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

export default class ButtonSubmit extends Component {

  constructor(props) {
    super(props);
  }

  onPress = () => {
    this.props.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
            activeOpacity={1}>
              <Text style={styles.text}>Back to Login</Text>
          </TouchableOpacity>
        
      </View>
    );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -20,
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

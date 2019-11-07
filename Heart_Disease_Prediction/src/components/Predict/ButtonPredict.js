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

import {predict} from '../../actions/PredictActions';

// import {predict} from '../images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

class ButtonPredict extends Component {
    constructor() {
        super();
    }
    onPress = () => {
      if(this.props.age.trim() != '') {
        if(this.props.restingBp.trim() != '') {
          if(this.props.cholestrol.trim() != '') {
            if(this.props.maxHR.trim() != '') {
              if(this.props.depression.trim() !='') {
                if(!(isNaN(this.props.age))) {
                  if(!(isNaN(this.props.restingBp))) {
                    if(!(isNaN(this.props.cholestrol))) {
                      if(!(isNaN(this.props.maxHR))) {
                        if(!(isNaN(this.props.depression))) {
                          console.log("reading input data... button predict onpress")
                          const inputDetails = {
                            age: this.props.age,
                            sex: this.props.sex,
                            chestPain: this.props.chestPain,
                            restingBp: this.props.restingBp,
                            cholestrol: this.props.cholestrol,
                            bloodSugar: this.props.bloodSugar,
                            restEcg: this.props.restEcg,
                            maxHR: this.props.maxHR,
                            angina: this.props.angina,
                            depression: this.props.depression,
                            slope: this.props.slope,
                            coloredVessel: this.props.coloredVessel,
                            thal: this.props.thal,
                          }
                          console.log("read input data " + inputDetails)
                          this.props.predictDisease(inputDetails);
                          this.props.navigate('Result');
                        } else {
                          alert('Enter Depression value in numbers.')
                        }
                      } else {
                        alert('Enter Max Heart Rate value in numbers.')
                      }
                    } else {
                      alert('Enter Cholestrol value in numbers.')
                    }
                  } else{
                    alert('Enter Resting Blood Pressure value in numbers.')
                  }
                } else {
                  alert('Enter Age in numbers')
                }
              } else {
                alert('Please Enter Depression value.')
              }
            } else {
              alert('Please Enter Maximum Heart Rate.')
            }
          } else {
            alert('Please Enter Cholestrol value.')
          }
        } else {
          alert('Please Enter Resting BP value.')
        }
      } else {
        alert('Please Enter Age.')
      } 
    }

    

    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}
              activeOpacity={1}>
                <Text style={styles.text}>Predict</Text>
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
    marginTop: 10,
  },
  
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  
});

ButtonPredict.propTypes = {
  age: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  chestPain: PropTypes.string.isRequired,
  restingBp: PropTypes.string.isRequired,
  cholestrol: PropTypes.string.isRequired,
  bloodSugar: PropTypes.string.isRequired,
  restEcg: PropTypes.string.isRequired,
  maxHR: PropTypes.string.isRequired,
  angina: PropTypes.string.isRequired,
  depression: PropTypes.string.isRequired,
  slope: PropTypes.string.isRequired,
  coloredVessel: PropTypes.string.isRequired,
  thal: PropTypes.string.isRequired,
  predictDisease: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  age: state.predict.age,
  sex: state.predict.sex,
  chestPain: state.predict.chestPain,
  restingBp: state.predict.restingBp,
  cholestrol: state.predict.cholestrol,
  bloodSugar: state.predict.bloodSugar,
  restEcg: state.predict.restEcg,
  maxHR: state.predict.maxHR,
  angina: state.predict.angina,
  depression: state.predict.depression,
  slope: state.predict.slope,
  coloredVessel: state.predict.coloredVessel,
  thal: state.predict.thal
});

const mapDispatchToProps = dispatch => ({
  predictDisease: (inputDetails) => dispatch(predict(inputDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPredict);
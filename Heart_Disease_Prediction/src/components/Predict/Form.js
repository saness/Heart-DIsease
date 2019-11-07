import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native'; 


import {changeAge, changeSex, changeChestPain, changeRestingBp, changeCholestrol, changeBloodSugar, changeRestEcg, changeMaxHR, changeAngina, changeDepression,changeSlope, changeColoredVessel, changeThal} from '../../actions/PredictActions';


import UserInput from './UserInput';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

class Form extends Component {
    constructor(props) {
        super(props);
        
    }

    ageChanged = value => this.props.changeUserAge(value);

    sexChanged = value => this.props.changeUserSex(value);

    chestPainChanged = value => this.props.changeUserChestPain(value);

    restingBpChanged = value => this.props.changeUserRestingBp(value);

    cholestrolChanged = value => this.props.changeUserCholestrol(value);

    bloodSugarChanged = value => this.props.changeUserBloodSugar(value);

    restEcgChanged = value => this.props.changeUserRestEcg(value);

    maxHRChanged = value => this.props.changeUserMaxHR(value);

    anginaChanged = value => this.props.changeUserAngina(value);

    depressionChanged = value => this.props.changeUserDepression(value);

    slopeChanged = value => this.props.changeUserSlope(value);

    coloredVesselChanged = value => this.props.changeUserColoredVessel(value);

    thalChanged = value => this.props.changeUserThal(value);

    

    render() {
        return (
          <View style={styles.mainView}>
              <Text style={styles.text}>Input Data</Text>
              <ScrollView style={styles.scrollview}>
              <KeyboardAvoidingView  behavior="padding" style={styles.container} enabled>
                <Text style={styles.texts}>Age (Years):</Text>
                <UserInput
                  placeholder="Age"
                  keyboardType={'numeric'}
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCorrect={false}
                  value={this.props.age}
                  onChangeText = {this.ageChanged}
                />

                <Text style={styles.texts}>Sex:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.sex}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.sexChanged}  
                    >
                    <Picker.Item label="Male" value='1' />
                    <Picker.Item label = "Female" value='0' />
                  </Picker>
                </View>

                <Text style={styles.texts}>Chest Pain Type:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.chestPain}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.chestPainChanged}  
                    >
                    <Picker.Item label="Typical angina" value='1' />
                    <Picker.Item label = "Atypical angina" value='2' />
                    <Picker.Item label = "Non-angiinal Pain" value='3' />
                    <Picker.Item label = "Asymptomatic" value='4' />
                  </Picker>
                </View>
                
                <Text style={styles.texts}>Resting Blood Pressure(mmHg):</Text>
                <UserInput
                  placeholder="Resting BP in mm Hg"
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCorrect={false}
                  value={this.props.restingBp}
                  onChangeText = {this.restingBpChanged}
                />

                <Text style={styles.texts}>Serum Cholesterol (mg/dl):</Text>
                <UserInput
                  placeholder="Cholestrol in mg/dl"
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCorrect={false}
                  value={this.props.cholestrol}
                  onChangeText = {this.cholestrolChanged}
                />
                
                <Text style={styles.texts}>Fasting Blood Sugar > 120 mg/dl:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.bloodSugar}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.bloodSugarChanged}  
                    >
                    <Picker.Item label="True" value='1' />
                    <Picker.Item label = "False" value='0' />
                  </Picker>
                </View>

                <Text style={styles.texts}>Resting ECG:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.restEcg}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.restEcgChanged}  
                    >
                    <Picker.Item label="Normal" value='0' />
                    <Picker.Item label = "ST-T Wave Abnormality" value='1' />
                    <Picker.Item label = "Ventricular Hypertropy" value='2' />
                  </Picker>
                </View>

                <Text style={styles.texts}>Maximum Heart Rate:</Text>
                <UserInput
                  placeholder="Maximum Heart Rate"
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCorrect={false}
                  value={this.props.maxHR}
                  onChangeText = {this.maxHRChanged}
                />
                
                <Text style={styles.texts}>Exercise Induced Angina:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.angina}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.anginaChanged}  
                    >
                    <Picker.Item label="Yes" value='1' />
                    <Picker.Item label = "No" value='0' />
                  </Picker>
                </View>
                
                <Text style={styles.texts}>ST Depression Induced:</Text>
                <UserInput
                  placeholder="Depression"
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  autoCorrect={false}
                  value={this.props.depression}
                  onChangeText = {this.depressionChanged}
                />

                <Text style={styles.texts}>Slope of peak exercise ST segment:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.slope}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.slopeChanged}  
                    >
                    <Picker.Item label="Unsloping" value='1' />
                    <Picker.Item label = "Flat" value='2' />
                    <Picker.Item label = "Down Sloping" value='3' />
                  </Picker>
                </View>

                <Text style={styles.texts}>Number of Colored Vessel by flourosopy:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.coloredVessel}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.coloredVesselChanged}  
                    >
                    <Picker.Item label="None" value='0' />
                    <Picker.Item label = "One" value='1' />
                    <Picker.Item label = "Two" value='2' />
                    <Picker.Item label = "Three" value='3' />
                  </Picker>
                </View>

                <Text style={styles.texts}>Thallium Scan Results:</Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={this.props.thal}
                    mode={"dropdown"}
                    style={styles.picker}
                    onValueChange={this.thalChanged}  
                    >
                    <Picker.Item label = "Normal" value='3' />
                    <Picker.Item label = "Fixed Defect" value='6' />
                    <Picker.Item label = "Non reversible Defect" value='7' />
                  </Picker>
                </View>

              </KeyboardAvoidingView>
            </ScrollView>
          </View> 
        );
      }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
    },
    scrollview: {
      marginTop: 20,
      height:DEVICE_HEIGHT - 140
    },
    mainView: {
      marginTop: 30
    },
    text: {
      color: 'white',
      textAlign:'center',
      backgroundColor: 'transparent',
      fontSize: 25,
      //marginTop: 15
    },
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: DEVICE_WIDTH - 40,
      height: 40,
      marginHorizontal: 20,
      paddingLeft: 35,
      borderRadius: 20,
      color: '#ffffff',
      marginBottom:10
    },
    picker: {
      width: DEVICE_WIDTH - 40,
      height: 40,
      color: '#ffffff',
      
    },
    texts :{
      color:'white',
      marginLeft:25,
      marginBottom:5,
      fontSize:16}
  });
  
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
    thal: state.predict.thal,

  });
  
  const mapDispatchToProps = dispatch => ({
    changeUserAge: (age) => dispatch(changeAge(age)),
    changeUserSex: (sex) => dispatch(changeSex(sex)),
    changeUserChestPain: (chestPain) => dispatch(changeChestPain(chestPain)),
    changeUserRestingBp: (restingBp) => dispatch(changeRestingBp(restingBp)),
    changeUserCholestrol: (cholestrol) => dispatch(changeCholestrol(cholestrol)),
    changeUserBloodSugar: (bloodSugar) => dispatch(changeBloodSugar(bloodSugar)),
    changeUserRestEcg: (restEcg) => dispatch(changeRestEcg(restEcg)),
    changeUserMaxHR: (maxHR) => dispatch(changeMaxHR(maxHR)),
    changeUserAngina: (angina) => dispatch(changeAngina(angina)),
    changeUserDepression: (depression) => dispatch(changeDepression(depression)),
    changeUserSlope: (slope) => dispatch(changeSlope(slope)),
    changeUserColoredVessel: (coloredVessel) => dispatch(changeColoredVessel(coloredVessel)),
    changeUserThal: (thal) => dispatch(changeThal(thal)),
    
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Form);
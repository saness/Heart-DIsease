import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import bgSrc from '../images/background.png';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 45;

class Result extends Component {
    static navigationOptions = {
        header:null,
      };

    render() {
        console.log('Data: ')
        console.log(this.props.data)
        let algorithm1 = this.props.data.alg1;
        let algorithm2 = this.props.data.alg2;
        let algorithm3 = this.props.data.alg3;
        let algorithm4 = this.props.data.alg4;
        console.log(algorithm1)
        let algorithm1Disease = ""
        if(algorithm1 == 1) {
            algorithm1Disease = "There is probability of disease"
        } else {
            algorithm1Disease = "There is no probability of disease"
        }

        let algorithm2Disease = ""
        if(algorithm2 == 1) {
            algorithm2Disease = "There is probability of disease"
        } else {
            algorithm2Disease = "There is no probability of disease"
        }

        let algorithm3Disease = ""
        if(algorithm3 == 1) {
            algorithm3Disease = "There is probability of disease"
        } else {
            algorithm3Disease = "There is no probability of disease"
        }

        let algorithm4Disease = ""
        if(algorithm4 == 1) {
            algorithm4Disease = "There is probability of disease"
        } else {
            algorithm4Disease = "There is no probability of disease"
        }
        return(
            <ImageBackground style={styles.picture} source={bgSrc}>
                <View style={styles.mainView}>
                    <Text style={styles.text}>Results</Text>
                    
                    <View style={styles.display}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center', color:'#fff'}}>Decision Tree Prediction: </Text>
                        </View>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>{algorithm1Disease}</Text>
                    </View>

                    <View style={styles.display}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center',color:'#fff'}}>Logistic Regression Prediction: </Text>
                        </View>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>{algorithm2Disease}</Text>
                    </View>

                    <View style={styles.display}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center', color:'#fff'}}>Naive Bayes Prediction: </Text>
                        </View>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>{algorithm3Disease}</Text>
                    </View>

                    <View style={styles.display}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center', color:'#fff'}}>Neural Network Prediction: </Text>
                        </View>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>{algorithm4Disease}</Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <TouchableOpacity style={styles.touchable} onPress = {() => this.props.navigation.navigate('Description')}>
                            <Text style={{fontSize:16, alignSelf:'center',color:'white'}}>Algorithm Description</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable} onPress = {() => this.props.navigation.navigate('Algorithm')}>
                            <Text style={{fontSize:16, alignSelf:'center',color:'white'}}>Algorithm Accuracy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            
        )
    }
}

const styles = StyleSheet.create({
    picture: {
      flex: 1,
      resizeMode: 'cover',
    },
    mainView: {
      marginTop: 70
    },
    text: {
        color: 'white',
        textAlign:'center',
        backgroundColor: 'transparent',
        fontSize: 25
    },
    display: {
        marginTop: 20,
        marginLeft: MARGIN,
        marginRight: MARGIN,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor:'#fff',
        height: 95,
        elevation:10
    },
    heading: {
        // borderBottomColor: '#000',
        // borderBottomWidth:1,
        backgroundColor:'#1A5276',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:40,
        justifyContent:'center'
    },
    touchable:{
        width:160,
        marginTop:15,
        elevation:10,
        borderRadius:5,
        backgroundColor: '#00829C',
        height:45,
        justifyContent:'center'
    },
    
  });

const mapStateToProps = state => ({
    data: state.predict.data,
  
});
  
export default connect(mapStateToProps, null)(Result);
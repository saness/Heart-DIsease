import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 16;

export default class AboutApp extends Component {
    static navigationOptions = {
        header:null
        // title : 'About App',
        // headerBackground: (
        // <Image
        //     style={{width :DEVICE_WIDTH, height:80}}
        //     source={require("../images/wallpaper.png")}
        // />
        // ),
        // headerTitleStyle: {
        // color: 'white'
        // },
        // headerTintColor: '#fff',
    };

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View>

                <View style={styles.header}>
                    <Image resizeMode="stretch" source={require('../images/background.png')} style={{aspectRatio: 1,width:undefined,height:undefined, position:"absolute", top:0, left:0, right:0, bottom:0}} />
                    <View style={{width:DEVICE_WIDTH, height:64 ,flexDirection:'row'}}>
                        <TouchableOpacity style={styles.opacity1} onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="arrow-left" type="material-community" size={24} color="#FFF" /> 
                        </TouchableOpacity>
                        <Text style={{fontSize:20, fontWeight:'300', color:'#FFF', marginLeft:32, marginTop:35}}>About Page</Text>
                    </View>
                </View>

                {/* <View style={{alignItems:'center', marginTop:20}}> 
                    <Image style={{height:120, width:120, }} source={require('../images/logo.png')} />
                </View> */}

                <View style={styles.display}>
                    <Text style={{fontSize:24, textAlign:'center', marginTop:15, fontWeight:'500'}}>About App </Text>
                    
                    <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                        This application predicts the presence or absence of heart disease in a person. 
                        The user should enter correct inputs in the predict form.
                        Then machine learning algorithms will predict the outcome. Niave Bayes
                        shows the highest accuracy and should be used mostly for reference.
                    </Text>
                </View>

                <View style={styles.display2}>
                    <Text style={{fontSize:24, textAlign:'center', marginTop:15, fontWeight:'500'}}>Disclaimer </Text>
                    
                    <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                        The prediction done by the application 
                        is not 100% accurate.Hence the user should not 
                        completely rely on the application and should 
                        consult professionals before making any decision. 
                    </Text>
                </View>
                
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    header : {
        width:DEVICE_WIDTH,
        height: 175,
        position:'absolute',
        overflow:'hidden'
        
    },
    opacity1 : {
        width:28, 
        alignItems: 'flex-start', 
        marginLeft: 16, 
        marginTop:35
    },
    display: {
        marginTop: 25,
        marginLeft: MARGIN,
        marginRight: MARGIN,
        borderColor: '#000',
        // borderRadius: 10,
        backgroundColor:'#fff',
        height: 200,
        elevation:10,
        marginTop:130,
        padding:20
    },
    display2: {
        marginTop: 25,
        marginLeft: MARGIN,
        marginRight: MARGIN,
        borderColor: '#000',
        // borderRadius: 10,
        backgroundColor:'#fff',
        height: 200,
        elevation:10,
        padding:20
    },
})
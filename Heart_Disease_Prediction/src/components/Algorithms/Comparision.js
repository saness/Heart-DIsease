import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;


export default class AboutApp extends Component {
    static navigationOptions = {
        header:null
        // title : 'Algorithms',
        // headerBackground: (
        // <Image
        //     style={{width :DEVICE_WIDTH, height:75}}
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
            <View style={{flex:1}}>
                 <View style={styles.header}>
                    <Image resizeMode="stretch" source={require('../images/background.png')} style={{aspectRatio: 1,width:undefined,height:undefined, position:"absolute", top:0, left:0, right:0, bottom:0}} />
                    <View style={{width:DEVICE_WIDTH, height:64 ,flexDirection:'row'}}>
                            <TouchableOpacity style={styles.opacity1} onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name="arrow-left" type="material-community" size={24} color="#FFF" /> 
                            </TouchableOpacity>
                            <Text style={{fontSize:20, fontWeight:'300', color:'#FFF', marginTop:35, marginLeft:32}}>Algorithm Accuracy</Text>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={{flexDirection:"row",marginLeft:5, marginRight:5}}>
                        <View style={styles.heading}>
                            
                            <Text style={{ textAlign:'center',color:'#fff', fontSize:20}}>
                                Algorithm
                            </Text>
                        </View>

                        <View style={styles.heading2}>
                            
                            <Text style={{textAlign:'center',color:'#fff', fontSize:20}}>
                                Accuracy
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",marginLeft:5, marginRight:5}}>
                        <View style={styles.display}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070', fontSize:16}}>
                                Decision Tree
                            </Text>
                        </View>

                        <View style={styles.display2}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                                81.67%
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",marginLeft:5, marginRight:5}}>
                        <View style={styles.display3}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070', fontSize:16}}>
                                Logistic Regression
                            </Text>
                        </View>

                        <View style={styles.display4}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                                90.00%
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",marginLeft:5, marginRight:5}}>
                        <View style={styles.display5}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070', fontSize:16}}>
                                Naive Bayes
                            </Text>
                        </View>

                        <View style={styles.display6}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                                91.67%
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:"row",marginLeft:5, marginRight:5}}>
                        <View style={styles.display7}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070', fontSize:16}}>
                                Neural Network
                            </Text>
                        </View>

                        <View style={styles.display8}>
                            
                            <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                                90.00%
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.touchable} onPress = {() => this.props.navigation.navigate('Description')}>
                        <Text style={{fontSize:16, alignSelf:'center',color:'white'}}>Learn About Algorithms</Text>
                    </TouchableOpacity>
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
    main: {
        flex:3, 
        marginTop:120,
        marginLeft:16, 
        marginRight:16,
    },
    opacity1 : {
        width:28, 
        alignItems: 'flex-start', 
        marginLeft: 16, 
        marginTop:35
    },
    touchable:{
        marginLeft:45,
        marginRight:45,
        marginTop:15,
        backgroundColor: '#00829C',
        height:45,
        elevation:10,
        justifyContent:'center'
    },
    display: {
        borderRightWidth:1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2,
    },
    display2: {
        elevation:10,
        borderColor: '#000',
        backgroundColor:'#fff',
        height: 75,
        flex:2
    },
    heading: {
        borderBottomColor: '#000',
        backgroundColor:'#00829C',
        height:40,
        justifyContent:'center',
        flex:2,
        elevation:10
    },
    heading2: {
        borderBottomColor: '#000',
        backgroundColor:'#00829C',
        height:40,
        justifyContent:'center',
        flex:2,
        elevation:10
    },
    display3: {  
        borderRightWidth: 1,
        borderTopWidth: 1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2,
    },
    display4: {
        borderTopWidth: 1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2
    },
    display5: {
        borderRightWidth: 1,
        borderTopWidth: 1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2,
    },
    display6: {
        borderTopWidth: 1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2
    },
    display7: {
        borderRightWidth: 1,
        borderTopWidth: 1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2,
    },
    display8: {
        borderTopWidth: 1,
        elevation:10,
        borderColor: '#DCDCDC',
        backgroundColor:'#fff',
        height: 75,
        flex:2
    },
})
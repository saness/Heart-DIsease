import React, { Component } from 'react';
import {StyleSheet, Modal, View, Text, TouchableOpacity, ImageBackground, TouchableNativeFeedback, Image, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions';

import { connect } from 'react-redux';
import {setLoggedIn} from '../../actions/UserActions';


const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 30;

class Home extends Component {

   static navigationOptions = {
      header:null,
    };

    constructor(props) {
        super(props);
        this.firstCloseModal = this.firstCloseModal.bind(this);
    }
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible})
    }

    firstCloseModal = () => {
        this.setModalVisible(false)
        this.props.navigation.navigate('Diet');
        
    }

    secondCloseModal = () => {
        this.setModalVisible(false)
        this.props.navigation.navigate('Exercise');
        
    }

    

    render() {
        let user = this.props.username;
        return(
            <View>
                <Modal 
                    animationType = 'fade'
                    transparent = {true}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => {
                        this.setModalVisible(false)
                    }}
                    backgroundColor = {'rgba(256,256,256,0.5)'}
                    >
                    <View style={{height:250, width:DEVICE_WIDTH-MARGIN, borderRadius: 17, marginTop:'50%',alignSelf:'center', backgroundColor:'#FFF', elevation:2,}}>
                        <View style={{flexDirection:'row',height:50,alignItems:'center', justifyContent:'center'}}>
                            <Text style={{ fontSize:20, fontWeight:'700'}}>CHOOSE TIPS TOPIC</Text>
                            {/* <TouchableOpacity
                            style={{marginRight:16}}
                            onPress = {() => {this.setModalVisible(false);
                            }}>
                                <Icon name='cancel' size={24} color="#2ad5aa" />
                            </TouchableOpacity> */}
                        </View>
                        
                        <View style={{alignItems:'center', justifyContent:'space-around', height:174}}>
                            <TouchableOpacity
                                onPress = {() => this.firstCloseModal()}
                                style={{height:50,width:310, alignItems:'center', justifyContent:'center', marginTop:8, backgroundColor:'#00829C'}}>
                                    <Text style={{fontSize:20, color:'#FFF'}}>Diet Tips</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress = {() => this.secondCloseModal()}
                                style={{height:50,width:310, backgroundColor:'#00829C', alignItems:'center', justifyContent:'center'}}>
                                    <Text  style={{fontSize:20, color:'#FFF'}}>Exercise Tips</Text>
                            </TouchableOpacity>
                        </View> 
                     </View>
                
                </Modal>

                <View style={styles.header}>
                    <Image resizeMode="stretch" source={require('../images/background.png')} style={{aspectRatio: 1,width:undefined,height:undefined, position:"absolute", top:0, left:0, right:0, bottom:0}} />
                    <View style={{width:412, height:56 ,flexDirection:'row', justifyContent:'space-between'}}>
                        <View>
                            <TouchableOpacity style={styles.opacity1} onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="menu" type= 'material' size={24} color="#FFF" /> 
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginTop:16 , marginLeft:40}}>
                        <Text style={{fontSize:18, fontWeight:'700', color:'#FFF'}}>Hello {this.props.username}</Text>
                        <Text style={{fontSize:16, fontWeight:'400', color:'#FFF',marginTop:8}}>Welcome to Home Page</Text>
                    </View>
                </View>

                <View style={{marginTop:120}}>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:24, marginLeft:24,marginRight:24}}>
                        
                        <TouchableNativeFeedback onPress = {() =>  this.props.navigation.navigate('Predict')}>
                            <View style={styles.opacity2}>
                                <Image style={{height: 60, width:60,marginTop:30}} source={require('../images/Predict.png')}/>
                                <Text style={{fontSize: 20, marginBottom: 16, color:'#707070'}}>Predict</Text>
                            </View>
                        </TouchableNativeFeedback>

                    
                        <TouchableNativeFeedback onPress = {() => this.props.navigation.navigate('Algorithm')}>
                            <View style={styles.opacity3}>
                            <Image style={{height: 50, width:60,marginTop:30}} source={require('../images/Algorithms.png')}/>
                                <Text style={{fontSize: 20, marginBottom: 16, color:'#707070'}}>Algorithms</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:24, marginLeft:24,marginRight:24}}>

                        <TouchableNativeFeedback onPress = {() => this.props.navigation.navigate('News')}>
                            <View style={styles.opacity2}>
                                <Image style={{height: 55, width:65,marginTop:30}} source={require('../images/News.png')}/>
                                <Text style={{fontSize: 20, marginBottom: 16, color:'#707070'}}>News Feed</Text>
                            </View>
                        </TouchableNativeFeedback>
                    
                        <TouchableNativeFeedback onPress = {() =>  {this.setModalVisible(true)}}>
                            <View  style={styles.opacity3}>
                                <Image style={{height: 55, width:45,marginTop:30}} source={require('../images/Tips.png')}/>
                                <Text style={{fontSize: 20, marginBottom: 16, color:'#707070'}}> Health Tips</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:24, marginLeft:24,marginRight:24}}>
                        
                            <TouchableNativeFeedback onPress = {() =>  this.props.navigation.navigate('AboutApp')}>
                                <View style={styles.opacity2}>
                                    <Image style={{height: 60, width:60,marginTop:30}} source={require('../images/About.png')}/>
                                    <Text style={{fontSize: 20, marginBottom: 16, color:'#707070'}}>About App</Text>
                                </View>
                            </TouchableNativeFeedback>
                        
                            <TouchableNativeFeedback onPress = {() => {Alert.alert('Signing Off...');
                                                                this.props.setUserLoggedIn(false);}}>
                                <View  style={styles.opacity3}>
                                    <Image style={{height: 60, width:60,marginTop:30}} source={require('../images/logout.png')}/>
                                    <Text style={{fontSize: 20, marginBottom: 16, color:'#707070'}}>Log Out</Text>
                                </View>
                            </TouchableNativeFeedback>
                          
                    </View>
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
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        overflow:'hidden'
        
    },
    opacity1 : {
        width:28, 
        alignItems: 'flex-start', 
        marginLeft: 16, 
        marginTop:32
    },
    opacity2 : {
        width:140,
        height:145,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius:8,
        backgroundColor:"#F1F1F1",
        elevation:10
    },
    opacity3 : {
        width:140,
        height:145,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius:8,
        backgroundColor:"#F1F1F1",
        elevation:10
    }
})

const mapDispatchToProps = dispatch => ({
    setUserLoggedIn: (loggedIn) => dispatch(setLoggedIn(loggedIn)),
    
  });
  const mapStateToProps = state => ({
    username: state.user.username,
  
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);

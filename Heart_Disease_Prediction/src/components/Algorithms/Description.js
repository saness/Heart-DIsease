import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions';

const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 20;

export default class AboutApp extends Component {
    static navigationOptions = {
        title : 'Algorithm Description',
        headerBackground: (
        <Image
            style={{width :DEVICE_WIDTH, height:80}}
            source={require("../images/background.png")}
        />
        ),
        headerTitleStyle: {
        color: 'white'
        },
        headerTintColor: '#fff',
    };

    constructor(props){
        super(props);
    }

    render() {
        return(
            <View>
                <ScrollView style={{marginBottom: 15}}>
                    <View style={styles.display2}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center',color:'#fff'}}>Decision Tree </Text>
                        </View>
                        <Image source={require("../images/dt.png")} style={styles.image2}/>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                            Decision Tree uses the tree representation to solve the problem
                            in which each leaf node corresponds to a class label and attributes
                            are represented on the internal node of the tree. In this algorithm the
                            best attribute of the dataset is at the root of tree. Then the training
                            set are split into two subsets. The steps are repeated until there are 
                            leaf nodes in all the branches of the tree.
                        </Text>
                    </View>

                    <View style={styles.display2}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center',color:'#fff'}}>Logistic Regression </Text>
                        </View>
                        <Image source={require("../images/lr.png")} style={styles.image3}/>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                            Logistic Regression is a statistical method for preficting binary classes. 
                            Logistic regression describes and estimates the relationship between one 
                            dependent binary variable and independent variables. The outcome variable
                            is dichotomous in nature. The dependent variable follows Bernoulli Distribution.
                            The estimation is done through maximum likelihood.
                        </Text>
                    </View>

                    <View style={styles.display2}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center',color:'#fff'}}>Naive Bayes </Text>
                        </View>
                        <Image source={require("../images/nb.png")} style={styles.image2}/>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                            Naive Bayes classifier is a probabilistic machine learning model
                            that is ued for classification task. The classifier is based on Bayes theorem.
                            It states that we can find the probability of A happening, given that B has 
                            occured.This classifier is fast and easy to implement but the predictors should
                            be independent.
                        </Text>
                    </View>

                    <View style={styles.display3}>
                        <View style={styles.heading}>
                            <Text style={{fontSize:18, textAlign:'center',color:'#fff'}}>Neural Network </Text>
                        </View>
                        <Image source={require("../images/nn.png")} style={styles.image}/>
                        <Text style={{marginTop:10, textAlign:'center',color:'#707070'}}>
                            Neural Network are inspired by biological neural networks that constitute animal brains.
                            Such systems learn to perform tasks by considering examples. It consists of input, hidden
                            and output layers. Multilayer Neural Network  works by forward propagation method in which
                            neural network is fed with a set of inputs to get their dot product with their weights then 
                            feeding the later to an activation function and comparing the numerical value to the actual output.
                        </Text>
                    </View>
                </ScrollView>             
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width:412,
        flexDirection:'row',
        height: 75,
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
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor:'#fff',
        height: 200
    },
    display2: {
        marginTop: 25,
        marginLeft: MARGIN,
        marginRight: MARGIN,
        borderColor: '#000',
        elevation:10,
        backgroundColor:'#fff',
        height: 350,
        marginBottom:15
    },
    display3: {
        marginTop: 25,
        marginLeft: MARGIN,
        marginRight: MARGIN,
        borderColor: '#000',
        elevation:10,
        backgroundColor:'#fff',
        height: 440,
        marginBottom:15
    },
    heading: {
        borderBottomColor: '#000',
        height:40,
        backgroundColor:'#00829C',
        justifyContent:'center'
        
    },
    image: {
        width:170,
        height:205,
        alignSelf:'center'
    },
    image2: {
        width:240,
        height:150,
        alignSelf:'center'
    },
    image3: {
        width:250,
        height:50,
        alignSelf:'center',
        marginTop:40
    }
})
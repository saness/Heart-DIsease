import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from 'react-navigation';

import ProfileScreen from '../Profile';
import HomeScreen from '../Home';
import PredictScreen from '../Predict';
import AboutApp from '../About//AboutApp';
import ResultScreen from '../Predict/Result';
import NewsScreen from '../News/NewsScreen';
import DietScreen from '../HealthTips/Diet';
import ExerciseScreen from '../HealthTips/Exercise';
import AlgorithmScreen from '../Algorithms/Comparision';
import AlgorithmDescription from '../Algorithms/Description';
import Portion from '../HealthTips/Portion';
import Vegetable from '../HealthTips/Vegetable';
import Grain from '../HealthTips/Grain';
import Fat from '../HealthTips/Fat';
import Protein from '../HealthTips/Protein';
import Sodium from '../HealthTips/Sodium';
import Routine from '../HealthTips/Routine';
import Tobacco from '../HealthTips/Tobacco';
import Exercises from '../HealthTips/Exercises';
import Limit from '../HealthTips/Limit';



const CustomDrawer = (props) => (
  <SafeAreaView>
      <View style={{height:165}}>
          <ImageBackground style={{flex:1,resizeMode:'cover'}} source={require('../images/background.png')}>
              <Image style={styles.profilePicture}
              source={require('../images/logos.png')}/>
              <Text style={{color:"#FFF",marginTop:24, fontSize:18, marginLeft:8}}>Heart Disease Prediction</Text>
          </ImageBackground>
      </View>
      <ScrollView>
          <DrawerItems {...props} />
          
      </ScrollView>
  </SafeAreaView>
)

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen:HomeScreen},
  "About App": {screen: AboutApp},

}, {
  contentComponent: CustomDrawer,
  contentOptions:{
    inactiveTintColor:"#737373",
    activeTintColor: '#1D9577',
    activeBackgroundColor: '#F1F1F1'
  }
})

const mainStack = createStackNavigator({
  AppDrawerNavigator: {screen: AppDrawerNavigator},
  Profile: {screen:ProfileScreen},
  Predict: {screen: PredictScreen},
  Result: {screen: ResultScreen},
  News: {screen: NewsScreen},
  Diet: {screen: DietScreen},
  Exercise: {screen: ExerciseScreen},
  AboutApp: {screen:AboutApp},
  Algorithm: {screen:AlgorithmScreen},
  Description: {screen: AlgorithmDescription},
  Portion: {screen: Portion},
  Vegetable: {screen: Vegetable},
  Grain: {screen: Grain},
  Fat: {screen: Fat},
  Protein: {screen: Protein},
  Sodium: {screen: Sodium},
  Routine: {screen: Routine},
  Tobacco: {screen: Tobacco},
  Exercises: {screen: Exercises},
  Limit: {screen: Limit},
  

},
AppDrawerNavigator.navigationOptions = {
  header:null
},
)

const AppStack = createAppContainer(mainStack);

const styles = StyleSheet.create({
  profilePicture: {
      width: 70,
      height: 60,
      borderRadius: 0,
      marginTop: 32,
      marginLeft:8
  },
});

export default AppStack;

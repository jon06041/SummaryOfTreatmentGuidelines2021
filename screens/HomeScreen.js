import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView, ImageBackground,TouchableOpacity, image, Dimensions} from 'react-native';
import * as React from 'react';
import {  Button, AppBar,HStack, IconButton } from "@react-native-material/core";
import styles from '../src/styles';
//import {Tab} from '../src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TermsOfUse from '../screens/TermsOfUse';
import TableOfContents from '../screens/TableOfContents';
import TestScreen from '../screens/TestScreen';
import Ionicon from 'react-native-vector-icons/Ionicons';
//import { createDrawerNavigator } from '@react-navigation/drawer';

//const image = ('../screens/images/Treatmentfront.png'
//);
//'../screens/images/DNA Trans.png'
const fullScreenWidth = Dimensions.get('window').width;
    

  
  
    

function HomeScreen ({navigation}){ 
return (
  
  
  
  <ImageBackground style={{ flex: 1 }} imageStyle={{ resizeMode: 'stretch' }} source={require('../screens/images/Treatmentfront.png')}>


    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
</View>
        


        
      </ScrollView>
    </View>




  </ImageBackground>
  
)    
}




//function TableOfContentsStackScreen() {
  //return (
      
  //);
  //}
 // function TermsOfUseStackScreen() {
   // return (
      //  <Stack.Navigator>
            
       // </Stack.Navigator>
   // );
   // }
    
      


//export default function Navigation (props) {
//return(
 

 

    
   



export default HomeScreen;
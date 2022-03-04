import { StatusBar } from 'expo-status-bar';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { StyleSheet, Text, View, Dimensions, Platform,SafeAreaView, tabBarStyle,TouchableOpacity, Image } from 'react-native';
import React, { createRef } from 'react'
import { NavigationContainer,getFocusedRouteNameFromRoute,navigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button,AppBar,HStack, IconButton } from "@react-native-material/core";
import { Spacer, Divider } from 'react-native-flex-layout';
import HomeScreen from './screens/HomeScreen'
import TestScreen from './screens/TestScreen'
import Cervitis from './screens/Cervitis'
import Bacterial_Vaginosis from './screens/Bacterial_Vaginosis'
import Chlamydial_Infections from './screens/Chlamydial_Infections'
import Epididymitis from './screens/Epididymitis'
import HSV from './screens/HSV'
import HPV from './screens/HPV'
import Gonococcal_Infections from './screens/Gonococcal_Infections'
import Lymphogranuloma_Venereum from './screens/Lymphogranuloma_Venereum'
import Nongonococcal_Urethritis from './screens/Nongonococcal_Urethritis'
import Pediculosis_Pubis from './screens/Pediculosis_Pubis'
import Pelvic_Inflammatory_Disease from './screens/Pelvic_Inflammatory_Disease'
import Scabies from './screens/Scabies'
import Syphilis from './screens/Syphilis'
import Trichomoniasis from './screens/Trichomoniasis'
import TermsOfUseStackNavigator from './screens/TermsOfUse';
import TableOfContents from './screens/TableOfContents';
import DrawerNavigator from './src/DrawerNavigator'
import BottomTabNavigator from './src/TabNavigator'



const navigationRef = createRef()
const nav = () => navigationRef.current



const App = () => {
  return (
 
  
 
  <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
 
);

}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})


export default App

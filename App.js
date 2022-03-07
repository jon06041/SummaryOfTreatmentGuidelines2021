import { StatusBar } from 'expo-status-bar';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { StyleSheet, Text, View, Dimensions, Platform,SafeAreaView, tabBarStyle,TouchableOpacity, Image } from 'react-native';
import React, { createRef } from 'react'
import { NavigationContainer,getFocusedRouteNameFromRoute,navigation} from '@react-navigation/native';
import DrawerNavigator from './src/DrawerNavigator'
import Cervitis from './screens/Cervitis';




const navigationRef = createRef()
const nav = () => navigationRef.current



const App = () => {
  return (
 
  
 
  <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav}  />
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

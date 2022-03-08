
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Image,Text,View,ScrollView,ImageBackground,TouchableOpacity,image,Dimensions,StyleSheet,} from "react-native";
import React from 'react';
import {Button,AppBar,HStack,IconButton,} from "@react-native-material/core";
import HomeTab from '../screens/HomeScreen'
import { routes,  item, screens } from '../src/RouteItems'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TableOfContents from "../screens/TableOfContents";
import TestScreen from "../screens/TestScreen";
import TermsOfUse from "../screens/TermsOfUse";
import Ionicon from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from '@expo/vector-icons'

const fullScreenWidth = Dimensions.get("window").width;
const Tab = createBottomTabNavigator()



const tabOptions = ({ route }) => {
const item = routes.find(routeItem => routeItem.name === route.name)

  /*if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    }
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }
}*/
}
function  BottomTabNavigator () {
    return (
     <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'TestScreen') {
          iconName = focused ? 'disease' : 'disease';
        }else if (route.name === 'TableOfContents') {
          iconName = focused ? 'notes-medical' : 'notes-medical';
        }else if (route.name === 'TermsOfUse') {
          iconName = focused ? 'file' : 'file';
        }

        // You can return any component that you like here!
        return <FontAwesome5 name={iconName} size={size} color={color} />;
        <Ionicon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#0000b3',
      tabBarInactiveTintColor: 'gray',
    })}>
     
     
   

      
   <Tab.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false,tabBarLabel: 'Home' }}/>
   <Tab.Screen name="TestScreen" component={TestScreen} options={{
     headerTitle: 'Diseases',
     headerStyle: {
      backgroundColor: '#0080ff',
      height: 50,
    },
      tabBarLabel: 'Diseases'
    }}/>
   <Tab.Screen name="TableOfContents" component={TableOfContents}options={{headerTitle:'Notes',headerStyle: {
      backgroundColor: '#0080ff',
      height: 50,
    }, tabBarLabel: 'Notes'}}/>
   <Tab.Screen name="TermsOfUse" component={TermsOfUse}options={{headerTitle:'Terms Of Use',headerStyle: {
      backgroundColor: '#0080ff',
      height: 50,
    }, tabBarLabel: 'Terms Of Use'}}/>
   
   </Tab.Navigator>
        
     
    );
   }
  
   const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#292929',
      fontSize: 12,
    },
    tabContainer: {
      height: 60,
    }
  })

export default BottomTabNavigator;

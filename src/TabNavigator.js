import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  image,
  Dimensions,
  StyleSheet,
  
} from "react-native";

import React from 'react';
import {
  Button,
  AppBar,
  HStack,
  IconButton,
} from "@react-native-material/core";
import HomeTab from '../src/StackNavigator'
import { routes,  item, screens } from '../src/RouteItems'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TableOfContents from "../screens/TableOfContents";
import TestScreen from "../screens/TestScreen";
import TermsOfUse from "../screens/TermsOfUse";
import Ionicon from "react-native-vector-icons/Ionicons";
import HomeStackNavigator from "../screens/HomeScreen";
import TermsOfUseStackNavigator from "../screens/TermsOfUse";

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
     <Tab.Navigator screenOptions={tabOptions}>
     
     
   

      
   <Tab.Screen name="Home" component={HomeTab} options={{ headerShown: false }}/>
   <Tab.Screen name="Diseases" component={TestScreen}/>
   <Tab.Screen name="NotesTab" component={TableOfContents}/>
   <Tab.Screen name="TermsOfUse" component={TermsOfUse}/>
   
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

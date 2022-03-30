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
} from "react-native";
import * as React from "react";
import {
  Button,
  AppBar,
  HStack,
  IconButton,
} from "@react-native-material/core";
import styles from "../src/styles";
//import {Tab} from '../src/Navigation';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TermsOfUse from "./TermsOfUse";
import TableOfContents from "../screens/TableOfContents";
import TestScreen from "../screens/TestScreen";
import Ionicon from "react-native-vector-icons/Ionicons";
//import { createDrawerNavigator } from '@react-navigation/drawer';

//const image = ('../screens/images/Treatmentfront.png'
//);
//'../screens/images/DNA Trans.png'
const fullScreenWidth = Dimensions.get("window").width;
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ resizeMode: "stretch" }}
      source={require("../screens/images/STIIphoneapp.png")}
    >
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          ></View>
        </ScrollView>
        
    
   
  
      </View>
    </ImageBackground>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

//May need to change most references to HomeScreen -change to HomeStack depending on where from

export default HomeStackNavigator;

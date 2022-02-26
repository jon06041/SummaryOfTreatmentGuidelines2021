import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Provider as PaperProvider} from 'react-native-paper';
import { Button,AppBar,HStack, IconButton } from "@react-native-material/core";
//import App from './App'
function TermsOfUse ({navigation}){
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Button title = "Back to the home page or hit back" onPress={() => navigation.navigate('Cervitis')}/>
</View>

);

}






export default TermsOfUse;
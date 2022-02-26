import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView, ImageBackground,TouchableOpacity, image} from 'react-native';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { } from 'react-native-paper';
import {  Button, AppBar,HStack, IconButton } from "@react-native-material/core";
import {  Spacer, Divider } from 'react-native-flex-layout';
import styles from '../src/styles';


//const image = ('../screens/images/Treatmentfront.png'
//);
//'../screens/images/DNA Trans.png'
  
    
    
    

function TestScreen ({navigation}){
return (
    <ImageBackground style={{flex:1}} imageStyle={{resizeMode: 'stretch'}} source={require('../screens/images/dnatrans3.png')
} >
    
  <View style={styles.container}>
  <ScrollView style={styles.scrollView}>
    <TouchableOpacity  onPress={() => navigation.navigate('Cervitis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Cervitis</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Bacterial_Vaginosis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Bacterial Vaginosis</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Chlamydial_Infections')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Chlamydial Infection</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Epididymitis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Epididymitis</Text>
     </View>
    <TouchableOpacity  onPress={() => navigation.navigate('HSV')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Genital Herpes Simplex</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('HPV')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Genital Warts (Human Papillomavirus)</Text>
     </View>
    </TouchableOpacity>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Gonococcal_Infections')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Gonococcal Infections</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Lymphogranuloma_Venereum')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Lymphogranuloma Venereum</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Nongonococcal_Urethritis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Nongonococcal Urethritis (NGU)</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Pediculosis_Pubis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Pediculosis Pubis</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Pelvic_Inflammatory_Disease')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Pelvic Inflammatory Disease</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Scabies')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Scabies</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Syphilis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Syphilis</Text>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Trichomoniasis')} >
     <View style={styles.button}>
    <Text style={styles.buttonText}>Trichomoniasis</Text>
     </View>
    </TouchableOpacity>
    
    </ScrollView>
    </View>
    
    
   
  
 </ImageBackground>
)    
}





export default TestScreen;
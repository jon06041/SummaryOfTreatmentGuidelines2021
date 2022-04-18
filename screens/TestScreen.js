
import {  Text, View, ScrollView, ImageBackground,TouchableOpacity, Dimensions} from 'react-native';
import * as React from 'react';
import styles from '../src/styles';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

  
const fullScreenWidth = Dimensions.get("window").width;
const fullScreenHeight = Dimensions.get("window").height;
    
    

function TestScreen ({navigation}){
return (
    <ImageBackground style={{flex:1}} imageStyle={{resizeMode: 'stretch'}} source={require('../screens/images/dnatrans3.png')
} >
    
  <View style={styles.container}>
  <ScrollView style={styles.scrollView}>
    <TouchableOpacity   onPress={() => navigation.navigate('Cervitis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
	
    <Text style={styles.buttonText}NumberOfLines={2}>Cervitis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Bacterial_Vaginosis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Bacterial Vaginosis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Chlamydial_Infections')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Chlamydial Infection</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Epididymitis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Epididymitis</Text>
    </AutoSizeText>
     </View>
    <TouchableOpacity  onPress={() => navigation.navigate('HSV')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Genital Herpes Simplex</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('HPV')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text  style={styles.buttonText}>Genital Warts (Human Papillomavirus)</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Gonococcal_Infections')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Gonococcal Infections</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Lymphogranuloma_Venereum')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Lymphogranuloma Venereum</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Nongonococcal_Urethritis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Nongonococcal Urethritis (NGU)</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Pediculosis_Pubis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Pediculosis Pubis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Pelvic_Inflammatory_Disease')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Pelvic Inflammatory Disease</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Scabies')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Scabies</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Syphilis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Syphilis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => navigation.navigate('Trichomoniasis')} >
     <View style={styles.button}>
     <AutoSizeText
	fontSize={20}
	numberOfLines={2}
	mode={ResizeTextMode.max_lines}>
    <Text style={styles.buttonText}>Trichomoniasis</Text>
    </AutoSizeText>
     </View>
    </TouchableOpacity>
    
    </ScrollView>
    </View>
    
    
   
  
 </ImageBackground>
)    
}





export default TestScreen;
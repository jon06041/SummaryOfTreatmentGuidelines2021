

import {  Stylesheet,Text, View, ScrollView, Image, Linking } from 'react-native';
import * as React from 'react';
import styles from '../src/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MDL ({navigation}){
    return (
    <View style={{ flex: 1,  fontWeight: 'bold', fontSize: 22 }}>
    <ScrollView style={styles.scrollView}>
    <Text style={styles.baseText}>
    Medical Diagnostic Laboratories, L.L.C. (MDL), founded in 1997, serves primarily as a reference laboratory for Polymerase Chain Reaction (PCR) based testing to physicians, laboratories and hospitals worldwide.
     MDL is a CLIA certified infectious disease laboratory with multiple state licenses specializing in PCR technology. Molecular diagnostic techniques, such as the PCR method, are considered to be the most sensitive and specific for the laboratory diagnosis of infectious diseases. 
     MDL offers unique, non-invasive, highly stable specimen collection and transport platforms, such as the <Text style={styles.innerTextred}>One</Text>Swab,  
    <Text style={styles.innerTextyellow}> Uro</Text>Swab and <Text style={styles.innerTextgreen}>Naso</Text>Swab These platforms enable MDL to offer a variety of PCR based tests from a single swab with high sensitivity and specificity</Text>

    
    <View>
       <Text style={{textAlign: 'center'}}> click below to go to MDLAB.com</Text>
       <TouchableOpacity   onPress={ ()=> Linking.openURL('https://www.mdlab.com') } style={styles.container}>
      <Image  source={require("../screens/images/mdl-genesis.png")}resizeMode='contain' 
         />
    </TouchableOpacity>
    <Text style={{textAlign: 'center'}}>2439 Kuser Road . Hamilton NJ 08690-3303
       www.mdlab.com . Toll Free 877-269-0090
    </Text>
   </View>
   </ScrollView>
   </View>




 





    
      
      
      
    
      



  

    
    
    




);
}


export default MDL; 
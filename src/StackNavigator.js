import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import {Image,Text,View,ScrollView,ImageBackground,TouchableOpacity,image,Dimensions} from "react-native";
import * as React from "react";
import {Button,AppBar, HStack,IconButton} from "@react-native-material/core";
import styles from "./styles";
import { NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cervitis from '../screens/Cervitis'
import Bacterial_Vaginosis from '../screens/Bacterial_Vaginosis'
import Chlamydial_Infections from '../screens/Chlamydial_Infections'
import Epididymitis from '../screens/Epididymitis'
import HSV from '../screens/HSV'
import HPV from '../screens/HPV'
import Gonococcal_Infections from '../screens/Gonococcal_Infections'
import Lymphogranuloma_Venereum from '../screens/Lymphogranuloma_Venereum'
import Nongonococcal_Urethritis from '../screens/Nongonococcal_Urethritis'
import Pediculosis_Pubis from '../screens/Pediculosis_Pubis'
import Pelvic_Inflammatory_Disease from '../screens/Pelvic_Inflammatory_Disease'
import Scabies from '../screens/Scabies'
import Syphilis from '../screens/Syphilis'
import Trichomoniasis from '../screens/Trichomoniasis'
import HomeTab from "../src/TabNavigator";
import HomeScreen from "../screens/HomeScreen";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { routes, screens } from '../src/RouteItems'
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator()


const StackNavigator = () => {
    return (

<Stack.Navigator >
  
  
  
<Stack.Screen name='HomeScreen' component={HomeScreen}options={{ 
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }} />
  
  
 <Stack.Screen name="Cervitis" component={Cervitis}options={{ title: 'Cervitis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }} />
       
      <Stack.Screen name="Bacterial_Vaginosis" component={Bacterial_Vaginosis}options={{ title: 'Bacterial Vaginosis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>

      <Stack.Screen name="Chlamydial_Infections" component={Chlamydial_Infections}options={{ title: 'Chlamydial Infections',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

      }}/>
      <Stack.Screen name="Epididymitis" component={Epididymitis}options={{ title: 'Epididymitis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>

<Stack.Screen name="HSV" component={HSV}options={{ title: 'Genital Herpes Simplex',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
<Stack.Screen name="HPV" component={HPV}options={{ title: 'Genital Warts (Human Papillomavirus)',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>

      <Stack.Screen name="Gonococcal_Infections" component={Gonococcal_Infections}options={{ title: 'Gonococcal Infections',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Lymphogranuloma_Venereum" component={Lymphogranuloma_Venereum}options={{ title: 'Lymphogranuloma Venereum',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Nongonococcal_Urethritis" component={Nongonococcal_Urethritis}options={{ title: 'Nongonococcal Urethritis (NGU)',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Pediculosis_Pubis" component={Pediculosis_Pubis}options={{ title: 'Pediculosis Pubis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Pelvic_Inflammatory_Disease" component={Pelvic_Inflammatory_Disease}options={{ title: 'Pelvic Inflammatory Disease',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Scabies" component={Scabies}options={{ title: 'Scabies',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      
      <Stack.Screen name="Syphilis" component={Syphilis}options={{ title: 'Syphilis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      <Stack.Screen name="Trichomoniasis" component={Trichomoniasis}options={{ title: 'Trichomoniasis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      }}/>
      
          
  </Stack.Navigator>
  )
}
export default StackNavigator;
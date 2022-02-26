import { StatusBar } from 'expo-status-bar';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { StyleSheet, Text, View, Dimensions, Platform,SafeAreaView, tabBarStyle } from 'react-native';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button,AppBar,HStack, IconButton } from "@react-native-material/core";
import { Spacer, Divider } from 'react-native-flex-layout';
//import Navigation from './src/Navigation';
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
import TermsOfUse from './screens/TermsOfUse';
import TableOfContents from './screens/TableOfContents';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();

function HomeScreenTab() {
 return (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      
      let iconName;

      if (route.name === 'HomeScreen') {
        iconName = focused
          ? 'apps'
          : 'apps-outline';
      } else if (route.name === 'Diseases') {
        iconName = focused ? 'apps' : 'apps-outline';
      } else if (route.name === 'Notes') {
        iconName = focused ? 'apps' : 'apps-outline';
      }else if (route.name === 'TermsOfUse') {
        iconName = focused ? 'apps' : 'apps-outline';
      }
      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })}
>
<Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}

/>
<Tab.Screen name="Diseases" component={TestScreen}options={{ headerShown: false }}/>
<Tab.Screen name="Notes" component={TableOfContents}options={{ headerShown: false }}/>
<Tab.Screen name="TermsOfUse" component={TermsOfUse}options={{ headerShown: false }}/>

</Tab.Navigator>
     
   
 );
}
export default function App() {
  
return (
 
  
 
  <NavigationContainer>
    
 
  <Stack.Navigator >
  <Stack.Screen name="HomeScreenTab" component={HomeScreenTab}options={{ title: 'CDC Treatment Guidelines 2021',
     headerStyle: {
      backgroundColor: '#ADD8E6',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
}}/>
  
      
 <Stack.Screen name="Cervitis" component={Cervitis}options={{ title: 'Cervitis',
      headerStyle: {
        backgroundColor: '#ADD8E6',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  
      }}/>
       
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
  </NavigationContainer>
  
 
);

}


  




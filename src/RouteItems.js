import * as React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesome5 } from '@expo/vector-icons'

export const screens = {
  
  TestScreen: 'TestScreen',
  TableOfContents: 'TableOfContents',
  TermsOfUse: 'TermsOfUse',
  MDL: 'MDL',
  StackNavigator: 'StackNavigator',
}

export const routes = [
  
  
    {
      name: screens.StackNavigator,
      focusedRoute: screens.StackNavigator,
      title: 'Home',
      showInTab: true,
      showInDrawer: true,
      icon: (focused) =>
      <Icon name="home" size={20} color={focused ? '#ffffff18' : '#333'} />,
     
    },
  {
    name: screens.TestScreen,
    focusedRoute: screens.TestScreen,
    title: 'Diseases',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
    <Icon name={focused ? 'disease' : 'disease'} size={20} color={'#333'} />,
  },
  
  
  {
    name: screens.TableOfContents,
    focusedRoute: screens.TableOfContents,
    title: 'Notes',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#ffffff18' : '#333'} />,
  },
  
  {
    name: screens.TermsOfUse,
    focusedRoute: screens.TermsOfUse,
    title: 'TermsOfUse',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="yes" size={30} color={focused ? '#ffffff' : '#000'} />,
  },

  
  {
    name: screens.MDL,
    focusedRoute: screens.MDL,
    title: 'About MDL',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  
]
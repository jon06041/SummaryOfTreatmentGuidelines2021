import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
  HomeTab: 'HomeTab',
  TestScreen: 'TestScreen',
  Home2: 'HomeScreen',
  Home: 'Home',
  TermsOfUse: 'TermsOfUse',
  
}

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.TestScreen,
    focusedRoute: screens.TestScreen,
    title: 'Diseases',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
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
    name: screens.HomeScreen,
    focusedRoute: screens.HomeScreen,
    title: 'Home2',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
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

  
    

  
]
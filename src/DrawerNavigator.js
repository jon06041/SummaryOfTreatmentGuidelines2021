import * as React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity,Alert } from 'react-native'
import "react-native-gesture-handler";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'


import StackNavigator from '../src/StackNavigator';


import { routes, screens, focusedRoute } from '../src/RouteItems'

const Drawer = createDrawerNavigator()
const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute().name // get focused route name
  return (
    <DrawerContentScrollView {...props}>
      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute?.focusedRoute :
            route.name === screens.HomeTab
            
          return (
            <DrawerItem
            
              key={route.name}
              label={() => (
                <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                  {route.title}
                </Text>
              )}
              
              onPress={() => props.navigation.navigate(route.name)}
              style={[styles.drawerItem, focused ? styles.drawerItemFocused : null]}
            />
          )
        })
      }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#0000b3',
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
            <Icon name="bars" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
  
      
      <Drawer.Screen name={screens.StackNavigator} component={StackNavigator} options={{
        title: 'TopHome',
        headerTitle: () => <Image source={require('../screens/images/cdclogo.png')} />,
        headerRight: () => (
          <TouchableOpacity  onPress={() => Alert.alert('About this App','This App was created by Jon Sniffen; Medical Diagnostic Laboratories, and reflects recommended regimens found in CDCs Sexually Transmitted Infections Treatment Guidelines, 2021. This summary is intended as a source of clinical guidance. When more than one therapeutic regimen is recommended, the sequence is in alphabetical order unless the choices for therapy are prioritized based on efficacy, cost, or convenience. The recommended regimens should be used primarily; alternative regimens can be considered in instances of substantial drug allergy or other contraindications. An important component of STI treatment is partner management. Providers can arrange for the evaluation and treatment of sex partners either directly or with assistance from state and local health departments. Complete guidelines can be found online at www.cdc.gov/std/treatment.')} style={styles.headerRight}>
            <Icon name="info-circle" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}/>
      
      
      
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 20,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
    
  },
  drawerLabelFocused: {
    fontSize: 16,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 60,
    justifyContent: 'center'

  },
  drawerItemFocused: {
    backgroundColor: '#0080ff',
  },

Image: {
  flex: 1,
  aspectRatio: 1.5, 
  resizeMode: 'contain',
}})


export default DrawerNavigator
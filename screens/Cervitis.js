import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform,TouchableOpacity } from 'react-native';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,AppBar,HStack, IconButton, Icon, Collapsible, isCollapsed } from "@react-native-material/core";

import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Treatment Options">
      <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>
          doxycycline 100 mg orally 2x/day for 7 days
          </Text>
        

        </View>
        
      </List.Accordion>

      <List.Accordion
        title="ALTERNATIVE REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>

          azithromycin 1 gm orally in a single dose
          </Text>
        

        </View>
        
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;









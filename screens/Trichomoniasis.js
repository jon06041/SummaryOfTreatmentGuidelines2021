import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,AppBar,HStack, IconButton, Icon, Collapsible, isCollapsed } from "@react-native-material/core";



import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Treatments">
      <List.Accordion
        title="Women
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         metronidazole 500 mg orally 2x/day for 7 days
         </Text>
       </View>
       </List.Accordion>
       <List.Accordion
        title="ALTERNATE REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         tinidazole 2 gm orally in a single dose
         </Text>
       </View>
       </List.Accordion>
      </List.Accordion>
      <List.Accordion
        title="Men
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         metronidazole 2 gm orally in a single dose
         </Text>
       </View>
       </List.Accordion>
       <List.Accordion
        title="ALTERNATE REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         tinidazole 2 gm orally in a single dose
         </Text>
       </View>
       </List.Accordion>
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
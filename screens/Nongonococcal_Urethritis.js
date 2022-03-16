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
    <List.Section >
   
    <List.Accordion
      title="Recommended Regimen"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
      <View>
<Text>
doxycycline 100 mg orally 2x/day for 7 days
</Text>
</View>
      </List.Accordion>
   
    <List.Accordion
            title="Alternate Regimens"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item NumberOfLines={4} />
            <View>
              <Text>azithromycin 1 gm orally in a single dose OR</Text>
            </View>
            <List.Item NumberOfLines={4} />
            <View>
              <Text>azithromycin 500 mg orally in a single dose, THEN 250 mg 1x/day for 4 days</Text>
            </View>
          </List.Accordion>
        
          
          <List.Accordion
            title="Persistent or Recurrent NGU: test for Mycoplasma genitalium:"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Accordion
      title="Recommended Regimen"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
            <View>
              <Text> OR</Text>
            </View>
            <List.Item NumberOfLines={4} />
            <View>
              <Text> days</Text>
            </View>
    </List.Accordion>
            
          </List.Accordion>
          
  </List.Section>
  );
};

export default MyComponent;

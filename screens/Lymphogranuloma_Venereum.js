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
    <List.Section title="Accordions">
      <List.Accordion
        title="Recommended Regimen"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
<Text>
doxycycline 100 mg orally 2x/day for 21 days
</Text>

        </View>
      </List.Accordion>
      <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text> azithromycin 1 gm orally 1x/week for 3 weeks 20 OR</Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View>
                <Text>erythromycin base 500 mg orally 4x/day for 21 days</Text>
              </View>
            </List.Accordion>
     
    </List.Section>
  );
};

export default MyComponent;

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
        title="Recommended Regimens"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
<Text>
permethrin 1% cream rinse applied to affected areas, wash after 10 minutes OR
</Text>

        </View>
        <List.Item  />
        <View>
          <Text>
          pyrethrin with piperonyl butoxide applied to affected areas, wash after 10 minutes
          </Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="Alternative Regimen"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
<Text>
malathion 0.5% lotion applied to affected areas, wash after 8–12 hours OR
</Text>

        </View>
        <List.Item  />
        <View>
          <Text>
          ivermectin 250 μg/kg body weight repeated in 7–14 days
          </Text>
        </View>
      </List.Accordion>

     
    </List.Section>
  );
};

export default MyComponent;

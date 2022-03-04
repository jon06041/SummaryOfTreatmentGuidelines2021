import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,AppBar,HStack, IconButton } from "@react-native-material/core";
import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="For acute epididymitis most likely caused by sexually transmitted chlamydia and gonorrhea"
        titleNumberOfLines={3}
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item />
        <View>
          <Text>ceftriaxone 500 mg IM in a single dose6 PLUS</Text>
        </View>
        <List.Item />
        <View>
          <Text>doxycycline 100 mg orally 2x/day for 10 days</Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="For acute epididymitis most likely caused by chlamydia, gonorrhea, or enteric organisms (men who practice insertive anal sex)"
        titleNumberOfLines={4}
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item />
        <View>
          <Text>ceftriaxone 500 mg IM in a single dose6 PLUS</Text>
        </View>
        <List.Item />
        <View>
          <Text>levofloxacin 500 mg orally 1x/day for 10 days</Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="For acute epididymitis most likely caused by enteric organisms only"
        titleNumberOfLines={3}
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item />
        <View>
          <Text>levofloxacin 500 mg orally 1x/day for 10 days days</Text>
        </View>
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;

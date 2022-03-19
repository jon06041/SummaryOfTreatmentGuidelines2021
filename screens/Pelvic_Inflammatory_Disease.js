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
    <List.Section>
      <List.Accordion
        title="Parenteral treatment"
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>
          ceftriaxone 1 gm by IV every 24 hours PLUS doxycycline 100 mg orally or by IV every 12 hours PLUS metronidazole 500 mg orally or by IV every 12 hours OR
          </Text>
        

        </View>
        <List.Item  />
        <View>
          <Text>
          cefotetan 2 gm by IV every 12 hours PLUS doxycycline 100 mg orally or by IV every 12 hours OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text>
          cefoxitin 2 gm by IV every 6 hours PLUS doxycycline 100 mg orally or by IV every 12 hours
          </Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="ALTERNATE REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>
          ampicillin-sulbactam 3 gm by IV every 6 hours PLUS doxycycline 100 mg orally or by IV every 12 hours OR
          </Text>
        

        </View>
        <List.Item  />
        <View>
          <Text>
          clindamycin 900 mg by IV every 8 hours PLUS gentamicin 2 mg/kg body weight by IV or IM FOLLOWED BY 1.5 mg/kg body weight every 8 hours. Can substitute with 3–5 mg/kg body weight 1x/day
          </Text>
        

        </View>
      </List.Accordion>
      </List.Accordion>
      <List.Accordion
        title="Intramuscular or oral treatment"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>
          ceftriaxone 500 mg IM in a single dose6 PLUS doxycycline 100 mg orally 2x/day for 14 days WITH metronidazole 500 mg orally 2x/day for 14 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text>
          cefoxitin 2 gm IM in a single dose AND probenecid 1 gm orally, administered concurrently in a single dose PLUS doxycycline 100 mg orally 2x/day for 14 days WITH metronidazole 500 mg orally 2x/day for 14 days OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text>
          Other parenteral third-generation cephalosporin (e.g., ceftizoxime or cefotaxime) PLUS
doxycycline 100 mg orally 2x/day for 14 days WITH metronidazole 500 mg orally 2x/day for 14 days
          </Text>
        </View>
      </List.Accordion>
     
    </List.Section>
  );
};

export default MyComponent;

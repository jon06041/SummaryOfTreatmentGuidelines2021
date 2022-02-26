import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Provider as PaperProvider} from 'react-native-paper';
import { Button,AppBar,HStack, IconButton } from "@react-native-material/core";
//import App from './App'
import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';
const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
    <List.Accordion
        title="External anogenital warts12 "
        left={props => <List.Icon {...props} icon="folder" />}>
         
         
        <List.Item  />
        <View >
          <Text>
          Patient-applied
imiquimod 3.75% or 5% cream13 OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          podofilox 0.5% solution or gel OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          sinecatechins 15% ointment13 OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          Provider–administered
cryotherapy with liquid nitrogen or cryoprobe OR
          </Text>
        </View>
        <List.Item  NumberOfLines={4}/>
        <View >
          <Text>
          surgical removal either by tangential scissor excision, tangential shave excision, curettage, laser, or electrosurgery OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          trichloroacetic acid (TCA) or bichloroacetic acid (BCA) 80%–90% solution
          </Text>
        </View>
        </List.Accordion>
        <List.Accordion
        title="Urethral meatus warts "
        left={props => <List.Icon {...props} icon="folder" />}>
         
         
        <List.Item  />
        <View >
          <Text>
          cryotherapy with liquid nitrogen OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          surgical removal
          </Text>
        </View>
        </List.Accordion>
        <List.Accordion
        title="Vaginal warts,14 Cervical warts,15 Intra-anal warts16 "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
         
         
        <List.Item  />
        <View >
          <Text>
          cryotherapy with liquid nitrogen OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          surgical removal OR
          </Text>
        </View>
        <List.Item  />
        <View >
          <Text>
          TCA or BCA 80%–90% solution
          </Text>
        </View>
        
        </List.Accordion>
        
       

    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

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
        title="Uncomplicated infections of the cervix, urethra, and rectum: adults and adolescents <150 kg6"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Section>
          <List.Accordion
        title="Recommended Regimens"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>
          ceftriaxone 500 mg IM in a single dose17
          </Text>
        </View>
        </List.Accordion>
        <List.Accordion
        title="Alternate Regimens"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item NumberOfLines={4} />
        <View>
          <Text>
          If cephalosporin allergy:
gentamicin 240 mg IM in a single dose PLUS azithromycin 2 gm orally in a single dose
          </Text>
        </View>
        <List.Item  NumberOfLines={4}/>
        <View>
          <Text>
          If ceftriaxone administration is not available or not feasible:
cefixime 800 mg orally in a single dose17

          </Text>
        </View>
        </List.Accordion>
        </List.Section>
        
      </List.Accordion>

      <List.Accordion
        title="Uncomplicated infection of the pharynx: adults and adolescents <150 kg6"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Section>
          
        <List.Item  />
        <View>
          <Text>
          ceftriaxone 500 mg IM in a single dose17

          </Text>
        </View>
        
        
        </List.Section>

      </List.Accordion>
      <List.Accordion
        title="Pregnancy"
        left={props => <List.Icon {...props} icon="folder" />}>
        
        <List.Item   />
        <View>
          <Text >
          ceftriaxone 500 mg IM in a single dose17
          </Text>
        </View>
        </List.Accordion>
      <List.Accordion
        title="l)"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        
        <List.Item  title='Recommended Regimens' />
        <View>
          <Text>
           dose
          </Text>
        </View>
       
        

      </List.Accordion>
      <List.Accordion
        title="tal)"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        
        <List.Item  title='Recommended Regimens' />
        <View>
          <Text>
           OR
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text>
          days

          </Text>
        </View>
        

      </List.Accordion>
      <List.Accordion
        title="ia"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Section>
          <List.Accordion
        title="Recommended Regimens"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  NumberOfLines={4}/>
        <View>
          <Text>
           OR
          </Text>
        </View>

        <List.Item  NumberOfLines={4}/>
        <View>
          <Text>
          days
          </Text>
        </View>

        </List.Accordion>
        <List.Accordion
        title="Alternate Regimens"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  NumberOfLines={4}/>
        <View>
          <Text>
           days
          </Text>
        </View>
        </List.Accordion>
        </List.Section>
      </List.Accordion>

    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

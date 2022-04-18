
import {  Text, View, ScrollView } from 'react-native';


import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options (see note 3">
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
    </ScrollView>
  );
};

export default MyComponent;









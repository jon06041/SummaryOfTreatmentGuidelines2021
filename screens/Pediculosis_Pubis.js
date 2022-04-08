
import {  Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
  );
};

export default MyComponent;

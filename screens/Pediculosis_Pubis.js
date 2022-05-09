import * as React from 'react';
import {  Text, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section >
      <List.Accordion
        title="Recommended Regimens"
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
          color={expandedone ? 'blue' : 'blue'}/>}
          onPress={handlePressone}>
        <List.Item  />
        <View>
<Text NumberOfLines={4} style={styles.accordionText}>
permethrin 1% cream rinse applied to affected areas, wash after 10 minutes OR
</Text>

        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          pyrethrin with piperonyl butoxide applied to affected areas, wash after 10 minutes
          </Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="Alternative Regimen"
        left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}>
        <List.Item  />
        <View>
<Text NumberOfLines={4} style={styles.accordionText}>
malathion 0.5% lotion applied to affected areas, wash after 8–12 hours OR
</Text>

        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          ivermectin 250 μg/kg body weight repeated in 7–14 days
          </Text>
        </View>
      </List.Accordion>

     
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

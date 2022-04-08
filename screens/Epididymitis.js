
import {  Text, View, ScrollView} from 'react-native';

import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';
const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
  );
};

export default MyComponent;

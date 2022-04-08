
import {  Text, View, ScrollView} from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
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
    </ScrollView>
  );
};

export default MyComponent;

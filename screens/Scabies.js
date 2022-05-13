import * as React from 'react';
import { Text, View, ScrollView  } from 'react-native';
import { List } from 'react-native-paper';

import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="RECOMMENDED REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          permethrin 5% cream applied to all areas of the body (from neck down), wash after 8–14 hours21 OR
          </Text>
        

        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>

          ivermectin 200ug/kg body weight orally, repeated in 14 days22 OR
          </Text>

        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>

          ivermectin 1% lotion applied to all areas of the body (from neck down), wash after 8–14 hours; repeat treatment in 1 week if symptoms persist
          </Text>

        </View>
      </List.Accordion>

      <List.Accordion
        title="ALTERNATIVE REGIMEN"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>

          lindane 1% 1 oz of lotion or 30 gm of cream applied thinly to all areas of the body (from neck down), wash after 8 hours23
          </Text>

        </View>
        
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

import { Text, View } from 'react-native';
import styles from '../src/styles';


import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Treatment Options">
      <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>
          permethrin 5% cream applied to all areas of the body (from neck down), wash after 8–14 hours21 OR
          </Text>
        

        </View>
        <List.Item  />
        <View>
          <Text>

          ivermectin 200ug/kg body weight orally, repeated in 14 days22 OR
          </Text>

        </View>
        <List.Item  />
        <View>
          <Text>

          ivermectin 1% lotion applied to all areas of the body (from neck down), wash after 8–14 hours; repeat treatment in 1 week if symptoms persist
          </Text>

        </View>
      </List.Accordion>

      <List.Accordion
        title="ALTERNATIVE REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
          <Text>

          lindane 1% 1 oz of lotion or 30 gm of cream applied thinly to all areas of the body (from neck down), wash after 8 hours23
          </Text>

        </View>
        
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;

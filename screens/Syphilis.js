import { Text, View } from 'react-native';


import styles from '../src/styles';
import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section >
      <List.Accordion
        title="Primary, secondary, and early latent: adults (including pregnant women and people with HIV infection)"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
       <View>
         <Text>
         benzathine penicillin G 2.4 million units IM in a single dose
         </Text>
       </View>
      </List.Accordion>
      <List.Accordion
        title="Late latent adults (including pregnant women and people with HIV infection)"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         benzathine penicillin G 7.2 million units total, administered as 3 doses of 2.4 million units IM each at 1-week intervals
         </Text>
       </View>
      </List.Accordion>
      <List.Accordion
        title="Neurosyphilis, ocular syphilis, and otosyphilis
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         aqueous crystalline penicillin G 18–24 million units per day, administered as 3–4 million units by IV every 4 hours or continuous infusion, for 10–14 days
         </Text>
       </View>
       </List.Accordion>
       <List.Accordion
        title="ALTERNATE REGIMEN"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         procaine penicillin G 2.4 million units IM 1x/day PLUS probenecid 500 mg orally 4x/day, both for 10–14 days
         </Text>
       </View>
       </List.Accordion>
      </List.Accordion>
      <List.Accordion
        title="For children or congenital syphilis
        "titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item  />
        <View>
         <Text>
         See Sexually Transmitted Infections Treatment Guidelines, 2021.
         </Text>
       </View>
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;


import {  Text, View, ScrollView  } from "react-native";

import * as React from "react";
import { List } from "react-native-paper";
import styles from '../src/styles';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="RECOMMENDED REGIMEN"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item />
        <View>
          <Text>metronidazole 500 mg orally 2x/day for 7 days OR</Text>
        </View>
        <List.Item />
        <View>
          <Text>
            metronidazole gel 0.75%, one 5 gm applicator intravaginally, 1x/day
            for 5 days OR
          </Text>
        </View>
        <List.Item />
        <View>
          <Text>
            clindamycin cream 2%, one 5 gm applicator intravaginally, at bedtime
            for 7 days
          </Text>
        </View>
      </List.Accordion>

      <List.Accordion
        title="ALTERNATIVE REGIMEN"
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item />
        <View>
          <Text>clindamycin 300 mg orally 2x/day for 7 days OR</Text>
        </View>
        <List.Item />
        <View>
          <Text>
            clindamycin ovules 100 mg intravaginally at bedtime for 3 days<Text style={{ fontSize: 8}}>1</Text> OR</Text>
              
            
          
        </View>
        <List.Item />
        <View>
          <Text>
            secnidazole 2 gm orally in a single dose
            <Text style={{ fontSize: 8,  textAlignVertical: 'top'}}>2</Text> OR
          </Text>
        </View>
        <List.Item />
        <View>
          <Text>tinidazole 2 gm orally 1x/day for 2 days OR</Text>
        </View>
        <List.Item />
        <View>
          <Text>tinidazole 1 gm orally 1x/day for 5 days</Text>
        </View>
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

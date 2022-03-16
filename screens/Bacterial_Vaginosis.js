import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, buttonText } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Button, AppBar, HStack, IconButton} from "@react-native-material/core";
import CollapsibleList from "react-native-collapsible-list";
import * as React from "react";
import { List } from "react-native-paper";

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
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
  );
};

export default MyComponent;

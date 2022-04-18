
import { Text, View,  ScrollView } from "react-native";
import * as React from "react";
import { List } from "react-native-paper";
import styles from "../src/styles";

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
      <List.Section title="Treatment Options">
        <List.Accordion
          title="First clinical episode of genital herpes (see note 7)" 
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text>acyclovir 400 mg orally 3x/day for 7–10 days</Text><Text style={styles.superscript}>8</Text><Text> OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>famciclovir 250 mg orally 3x/day for 7–10 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 1 gm orally 2x/day for 7–10 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Suppressive therapy for recurrent genital herpes (HSV-2) "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text>acyclovir 400 mg orally 2x/day OR</Text>
          </View>
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text>valacyclovir 500 mg orally 1x/day</Text><Text style={styles.superscript}>9</Text><Text> OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 1 gm orally 1x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>famciclovir 250 mg orally 2x/day</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Episodic therapy for recurrent genital herpes (HSV-2)(see note 10) "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text>acyclovir 800 mg orally 2x/day for 5 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>acyclovir 800 mg orally 3x/day for 2 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>famciclovir 1 gm orally 2x/day for 1 day OR</Text>
          </View>
          <List.Item NumberOfLines={4} />
          <View>
            <Text>
              famciclovir 500 mg once, FOLLOWED BY 250 mg 2x/day for 2 days OR
            </Text>
          </View>

          <List.Item />
          <View>
            <Text>famciclovir 125 mg 2x/day for 5 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 500 mg orally 2x/day for 3 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 1 gm orally 1x/day for 5 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Daily suppressive therapy for persons with HIV infection "
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text>acyclovir 400-800 mg orally 2x–3x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>famciclovir 500 mg orally 2x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 500 mg orally 2x/day</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Episodic therapy for persons with HIV infection"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text>acyclovir 400 mg orally 3x/day for 5–10 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>famciclovir 500 mg orally 2x/day for 5–10 days OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 1 gm orally 2x/day for 5–10 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Daily suppressive therapy of recurrent genital herpes in pregnant women (see note 11)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text>acyclovir 400 mg orally 3x/day OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>valacyclovir 500 mg orally 2x/day</Text>
          </View>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,AppBar,HStack, IconButton } from "@react-native-material/core";
import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
      <List.Section title="Treatment Options">
        <List.Accordion
          title="Adults and adolescents"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item />
              <View>
                <Text>doxycycline 100 mg orally 2x/day for 7 days</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item />
              <View>
                <Text>azithromycin 1 gm orally in a single dose OR</Text>
              </View>
              <List.Item />
              <View>
                <Text>levofloxacin 500 mg orally 1x/day for 7 days</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>

        <List.Accordion
          title="Pregnancy"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item />
              <View>
                <Text>azithromycin 1 gm orally in a single dose</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item />
              <View>
                <Text>amoxicillin 500 mg orally 3x/day for 7 days</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>
        <List.Accordion
          title="Infant and children <45 kg4 (nasopharynx, urogenital, and rectal)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Recommended Regimens" />
          <View>
            <Text NumberOfLines={4}>
              erythromycin base, 50 mg/kg body weight/day orally, divided into 4
              doses daily for 14 days OR
            </Text>
          </View>
          <List.Item />
          <View>
            <Text NumberOfLines={4}>
              ethylsuccinate, 50 mg/kg body weight/day orally, divided into 4
              doses daily for 14 days
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Children who weigh ≥45 kg, but who are aged <8 years (nasopharynx, urogenital, and rectal)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Recommended Regimens" />
          <View>
            <Text>azithromycin 1 gm orally in a single dose</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Children aged ≥8 years (nasopharynx, urogenital, and rectal)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Recommended Regimens" />
          <View>
            <Text>azithromycin 1 gm orally in a single dose OR</Text>
          </View>
          <List.Item />
          <View>
            <Text>doxycycline 100 mg orally 2x/day for 7 days</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Neonates:5 ophthalmia and pneumonia"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text>
                  erythromycin base, 50 mg/kg body weight/day orally, divided
                  into 4 doses daily for 14 days OR
                </Text>
              </View>

              <List.Item NumberOfLines={4} />
              <View>
                <Text>
                  ethylsuccinate, 50 mg/kg body weight/day orally, divided into
                  4 doses daily for 14 days
                </Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text>
                  azithromycin suspension 20 mg/kg body weight/ day orally,
                  1x/day for 3 days
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

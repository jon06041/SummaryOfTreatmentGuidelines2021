import * as React from 'react';
import { Text, View, ScrollView  } from 'react-native';
import { List } from 'react-native-paper';

import styles from '../src/styles';

const MyComponent = () => {
  const [expandedone, setExpandedone] = React.useState(true);
  const [expandedtwo, setExpandedtwo] = React.useState(true);
  const [expandedthree, setExpandedthree] = React.useState(true);
  const [expandedfour, setExpandedfour] = React.useState(true);
  const handlePressone = () => setExpandedone(!expandedone);
  const handlePresstwo = () => setExpandedtwo(!expandedtwo);
  const handlePressthree = () => setExpandedthree(!expandedthree);
  const handlePressfour = () => setExpandedfour(!expandedfour);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section title="Treatment Options">
      <List.Accordion
        title="RECOMMENDED REGIMEN Over-the-Counter Intravaginal Agents"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedone ? 'folder' : 'folder-open'}
        color={expandedone ? 'blue' : 'blue'}/>}
        onPress={handlePressone}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
         item 1
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 2
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 3
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 4
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 5
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 6
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 7
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 8
          </Text>
        </View>
      </List.Accordion>

      <List.Accordion
        title="Prescription Intravaginal Agents"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedtwo ? 'folder' : 'folder-open'}
        color={expandedtwo ? 'blue' : 'blue'} />}
        onPress={handlePresstwo}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Item 1
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Item 2
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Item 3
          </Text>
        </View>
      </List.Accordion>
      <List.Accordion
        title="Oral Agent"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedthree ? 'folder' : 'folder-open'}
        color={expandedthree ? 'blue' : 'blue'} />}
        onPress={handlePressthree}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          Item 1
          </Text>
        </View>
        
      </List.Accordion>
      <Text style={styles.innerTextred}>The creams and suppositories in this regimen are oil-based and might weaken latex condoms
      and diaphragms.  Patients and providers should refer to condom product labeling for further information. </Text>
      <List.Accordion
        title="Special Considerations"titleNumberOfLines={4}
        left={props => <List.Icon {...props} icon={expandedfour ? 'folder' : 'folder-open'}
        color={expandedfour ? 'blue' : 'blue'}/>}
        onPress={handlePressfour}>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
         item 1
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 2
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 3
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 4
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 5
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 6
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 7
          </Text>
        </View>
        <List.Item  />
        <View>
          <Text NumberOfLines={4} style={styles.accordionText}>
          item 8
          </Text>
        </View>
      </List.Accordion>
    </List.Section>
    </ScrollView>
  );
};

export default MyComponent;

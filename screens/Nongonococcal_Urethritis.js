
import {  Text, View, ScrollView } from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';
import styles from '../src/styles';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  //const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView style={styles.scrollView}>
    <List.Section >
   <List.Accordion
      title="Non Recurent Recommendations"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
    <List.Accordion
      title="Recommended Regimen"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
      <View>
<Text>
doxycycline 100 mg orally 2x/day for 7 days
</Text>
</View>
      </List.Accordion>
   
    <List.Accordion
            title="Alternate Regimens"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item NumberOfLines={4} />
            <View>
              <Text>azithromycin 1 gm orally in a single dose OR</Text>
            </View>
            <List.Item NumberOfLines={4} />
            <View>
              <Text>azithromycin 500 mg orally in a single dose, THEN 250 mg 1x/day for 4 days</Text>
            </View>
          </List.Accordion>
        </List.Accordion>
          
          <List.Accordion
            title="Persistent or Recurrent NGU: test for Mycoplasma genitalium:"titleNumberOfLines={4}
            left={(props) => <List.Icon {...props} icon="folder" />}
          ><List.Item NumberOfLines={4} />
            <List.Accordion 
      title="If M. genitalium resistance testing is unavailable but M. genitalium is detected by an FDA-cleared NAAT
      "titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon="folder" />}>
        <List.Accordion
      title="Recommended Regimen"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
      <View>
<Text>
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY moxifloxacin 400 mg 1x/day for 7 days
</Text>
</View>
      </List.Accordion>
      <List.Accordion
            title="Alternate Regimens"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item NumberOfLines={4} />
            <View>
              <Text> For settings without resistance testing and when moxifloxacin cannot be used:
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY azithromycin 1 gm orally on first day, FOLLOWED BY azithromycin 500 mg orally 1x/day
for 3 days and a test-of-cure 21 days after completion of therapy</Text>
            </View>
            
          </List.Accordion>
            
    </List.Accordion>
    <List.Accordion 
      title="If resistance testing is available, use resistance-guided therapy

      "titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon="folder" />}>
        <List.Accordion
      title="Recommended Regimen"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
      <View>
<Text>
Macrolide sensitive
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY azithromycin 1 gm orally initial dose, FOLLOWED BY azithromycin 500 mg orally 1x/day for 3 additional days (2.5 gm total)
Macrolide resistance
doxycycline 100 mg orally 2x/day for 7 days, FOLLOWED BY moxifloxacin 400 mg orally 1x/day for 7 days

</Text>
</View>
      </List.Accordion> 
      </List.Accordion>  
      <List.Accordion 
      title="Test for Trichomonas vaginalis in heterosexual men in areas where infection is prevalent


      "titleNumberOfLines={4}
      left={props => <List.Icon {...props} icon="folder" />}>
        <List.Accordion
      title="Recommended Regimen"
      left={props => <List.Icon {...props} icon="folder" />}>
      <List.Item NumberOfLines={4} />
      <View>
<Text>
metronidazole 2 gm orally in a single dose OR tinidazole 2 gm orally in a single dose
</Text>
</View>
      </List.Accordion> 
      </List.Accordion>  
          </List.Accordion>
          
  </List.Section>
  </ScrollView>
  );
};

export default MyComponent;

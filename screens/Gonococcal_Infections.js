
import {  Text, View, ScrollView,Button } from "react-native";

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
          title="Uncomplicated infections of the cervix, urethra, and rectum: adults and adolescents <150 kg (see note 6)" 
         
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item />
              
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <Text>ceftriaxone 500 mg IM in a single dose</Text><Text style={{fontSize: 8, lineHeight: 8}}> 17</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text>
                  If cephalosporin allergy: gentamicin 240 mg IM in a single
                  dose PLUS azithromycin 2 gm orally in a single dose
                </Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <Text>
                  If ceftriaxone administration is not available or not
                  feasible: cefixime 800 mg orally in a single dose</Text><Text style={{fontSize: 8, lineHeight: 8}}> 17</Text>
                
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>

        <List.Accordion
          title="Uncomplicated infection of the pharynx: adults and adolescents <150 kg (see note 6)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text>ceftriaxone 500 mg IM in a single dose</Text><Text style={{fontSize: 8, lineHeight: 8}}> 17</Text>
          </View>
        </List.Accordion>

        <List.Accordion
          title="Pregnancy"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text>ceftriaxone 500 mg IM in a single dose</Text><Text style={{fontSize: 8, lineHeight: 8}}> 17</Text>
          </View>
        </List.Accordion>

        <List.Accordion
          title="Conjunctivitis"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Text>ceftriaxone 1 gm IM in a single dose</Text><Text style={{fontSize: 8, lineHeight: 8}}> 18</Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Disseminated gonococcal infections (DGI) (see note 19)"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Section>
            <List.Accordion
              title="Recommended Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                <Text>ceftriaxone 1 gm IM or by IV every 24 hours</Text><Text style={{fontSize: 8, lineHeight: 8}}> 17</Text><Text>OR</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text>cefotaxime 1 gm by IV every 8 hours OR</Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View>
                <Text>ceftizoxime 1 gm every 8 hours</Text>
              </View>
            </List.Accordion>
          </List.Section>
        </List.Accordion>

        <List.Accordion
          title="Uncomplicated gonococcal vulvovaginitis, cervicitis, urethritis, pharyngitis, or proctitis: children >45 kg"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text>
              Treat with the regimen recommended for adults (see above)
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Ocular prophylaxis in neonates"
          titleNumberOfLines={4}
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item />
          <View>
            <Text NumberOfLines={4}>
              erythromycin (0.5%) ophthalmic ointment in each eye in a single
              application at birth
            </Text>
          </View>
        </List.Accordion>
        <List.Accordion
          title="Ophthalmia in neonates and infants"
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
                <Text>ceftriaxone 25–50 mg/kg body weight by IV OR</Text>
              </View>
              <List.Item NumberOfLines={4} />
              <View>
                <Text>IM in a single dose, not to exceed 250 mg</Text>
              </View>
            </List.Accordion>
            <List.Accordion
              title="Alternate Regimens"
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item NumberOfLines={4} />
              <View>
                <Text>
                  For neonates unable to receive ceftriaxone due to simultaneous
                  administration of intravenous calcium: cefotaxime 100 mg/kg
                  body weight by IV or IM as a single dose
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

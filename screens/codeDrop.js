//const App = () => (
  /*<AppBar
    title="Title"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function Alert() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}



function App() {
  return (
      
    
    <NavigationContainer>
      
      
      <Stack.Navigator initialRouteName="Home">
      
        <Stack.Screen name="Home" component={} options={{ title: 'Summary Of Treatment Guidelines 2021',
      headerStyle: {
        backgroundColor: '#f5533e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
      

      }}/>
      
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details',
      headerStyle: {
        backgroundColor: '#f5533e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }}/>
      <Stack.Screen name="Alert" component={Alert} options={{
           title: 'Alert',
           headerStyle: {
             backgroundColor: '#f5533e',
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
           }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}


//const _goBack = () => console.log('Went back');

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#ggg',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: 'blue'
  },
  
});

Accordion
import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import {List} from 'react-native-paper';
 
const GROUPS = 1
const OPTIONS = 1
 
const App = () => {
  
  const [arrs, updateArrs] = React.useState([])
 
  React.useEffect(() => {
    updateArrs(
      [...Array(GROUPS).keys()]
        .map(id => 
          ({ 
            id,
            title: `Group ${id}`,
            isExpanded: false,
            options: [...Array(OPTIONS).keys()]
              .map(key => 
                ({ title: `Option ${key}` })
            )
          })
        )
    )
  }, [])
 
  const expand = obj => {
    updateArrs(
      [...arrs].map(arr => ({
        ...arr,
        isExpanded: obj.id === arr.id ? !arr.isExpanded : false
      }))
    )
  }
 
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <List.Section title="Accordions">
          {arrs.map(acc => (
            <List.Accordion
            id={acc.id}
              title={acc.title}
              left={props => (
                <List.Icon
                  {...props}
                  icon={
                    acc.isExpanded
                      ? 'folder-open'
                      : 'folder'
                  }
                  color={'green'}
                />
              )}
              right={props => null}
              expanded={acc.isExpanded}
              onPress={() => expand(acc)}>
              {(acc.options || []).map(option => (
                <List.Item title={option.title} />
             
              ))}
            </List.Accordion>
          ))}
        </List.Section>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});
 
export default App;*/
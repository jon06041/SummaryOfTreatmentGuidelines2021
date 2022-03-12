import { Row } from 'react-bootstrap';
import { StyleSheet, Text, View, Platform, ImageBackground,TouchableOpacity, Dimensions} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen'

const fullScreenWidth = Dimensions.get("window").width;
const fullScreenHeight = Dimensions.get("window").height;
console.log ({fullScreenHeight});
console.log ({fullScreenWidth});
//https://bendyworks.com/blog/implementing-react-native-responsive-design-part-2 has a way to apply the useDimensions hook conditionally 


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      padding: 1,
      justifyContent: 'center',
      
      
      
     
    },
    button:{
      backgroundColor: "grey",
      padding: 20,
      margin: fullScreenWidth * 0.05,
      marginTop: 10,
      marginBottom: 10,
      height: fullScreenHeight * 0.075,
      width: fullScreenWidth * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "black",
      borderRadius: 35,
      borderWidth: 2,
      fontWeight: "bold",
      fontStyle: "normal",
      elevation:3,
      opacity: 0.85,
    },

    buttonText: {
     
     justifyContent: 'space-around',
      color: 'black',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      alignItems:  'center',
      margin: 10,
      fontFamily: 'AmericanTypewriter-CondensedBold',
      textAlign: 'center',
      
  }
  });

  export default styles
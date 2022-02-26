import { StyleSheet, Text, View, Platform, ImageBackground,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      padding: 1,
      justifyContent: 'center',
      
      
      
     
    },
    button:{
      backgroundColor: "grey",
      padding: 15,
      margin: 10,
      marginTop: 10,
      marginBottom: 10,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: "black",
      borderRadius: 35,
      borderWidth: 2,
      fontWeight: "100",
      fontStyle: "normal",
      elevation:3,
      opacity: 0.85,
    },

    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 12,
      fontFamily: 'AmericanTypewriter-CondensedBold',
      textAlign: 'center',
  }
  });

  export default styles

import { StyleSheet, Dimensions} from 'react-native';



const fullScreenWidth = Dimensions.get("window").width;
const fullScreenHeight = Dimensions.get("window").height;
console.log ({fullScreenHeight});
console.log ({fullScreenWidth});



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
      
  },
  innerTextred: {
     
    justifyContent: 'space-around',
     color: 'red',
     fontWeight: 'bold',
     fontSize: 16,
     textTransform: 'uppercase',
     alignItems:  'center',
     margin: 10,
     fontFamily: 'AmericanTypewriter-CondensedBold',
     textAlign: 'center',
     
 },
 innerTextyellow: {
     
  justifyContent: 'space-around',
   color: '#EACE09',
   fontWeight: 'bold',
   fontSize: 16,
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'AmericanTypewriter-CondensedBold',
   textAlign: 'center',
   
},
innerTextgreen: {
     
  justifyContent: 'space-around',
   color: 'green',
   fontWeight: 'bold',
   fontSize: 16,
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'AmericanTypewriter-CondensedBold',
   textAlign: 'center',
   
},
 baseText: {
     
  justifyContent: 'space-around',
   color: 'black',
   fontWeight: 'bold',
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'AmericanTypewriter-CondensedBold',
   textAlign: 'center',
   
},
baseText2: {
     
  justifyContent: 'space-around',
   color: 'black',
   fontWeight: 'bold',
   textTransform: 'uppercase',
   alignItems:  'center',
   margin: 10,
   fontFamily: 'AmericanTypewriter-CondensedBold',
   textAlign: 'left',
   
},
overlay: {
  opacity: 0.5,
  backgroundColor: '#000000'
},
superscript: {
  
  fontSize: 8,
  lineHeight: 8,
}
  });

  export default styles
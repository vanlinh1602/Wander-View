import { StyleSheet } from 'react-native';

// Style should be separated into a separate file so that it can be reused many times on 1 screen

export default StyleSheet.create({
  helloLine: {
    fontWeight:'bold',
    fontSize:24,
    color:'black',
  },
  introLine:{
    fontWeight:'bold',
    fontSize:18,
    color:'gray.400',
  },
  paddingBottom:{
    paddingBottom:100,
  },
  padding:{
    paddingHorizontal:15,
  },
});

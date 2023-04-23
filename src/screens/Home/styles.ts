import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  helloLine: {
    fontWeight:'bold',
    fontSize:24,
    color:'black',
    paddingTop:2,
  },
  hellotext:{
    fontSize:56,
  },
  introLine:{
    fontWeight:'bold',
    fontSize:18,
    color:'gray',
  },
  paddingBottom:{
    paddingBottom:160,
  },
  padding:{
    paddingHorizontal:15,
  },
  flex:{
    backgroundColor:'white',
    flexDirection:'row',
  },
  welcomeView:{
    margin:3,
    flex:1,
    padding:12,
  },
  orangeText:{
    color:'orange',
  },
  purpleText:{
    color:'purple',
  },
  avaView:{
    margin:2,
    alignItems:'center',
    padding:4,
  },
  avaImage:{
    height:75,
    width:75,
    borderRadius:100,
  },
  whiteView:{
    backgroundColor:'white',
    borderRadius:10,
  },
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  textInput: {
    marginTop: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    alignItems : 'center',
    flexDirection: 'row',
    borderRadius : 20,
    borderWidth : 1,
    marginHorizontal : 20,
    backgroundColor : 'white',
    borderColor: 'purple',
    elevation:5,
    marginVertical:5,
  },
  imageInput: {
    width: 40,
    height: 40,
    marginLeft : 10,
  },
  inputLocation: {
    height : 50,
    fontSize : 20,
    marginLeft : 10,
    color: 'black',
  },
});

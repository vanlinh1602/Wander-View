import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  touchableOpacity: {
    elevation: 9,
  },
  view: {
    alignContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 5,
    marginLeft: 9,
    marginRight: 12,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 2,
    marginBottom: 10,
  },
  locationCard:{
    backgroundColor:'white',
    elevation:9,
    marginRight:15,
  },
  imageLocation:{
    height:160,
    width:260,
    borderRadius:2,
  },
  paddingView:{
    paddingHorizontal:3,
    paddingBottom:4,
  },
  locationTitle:{
    fontWeight:'bold',
    paddingTop:2,
    fontSize:25,
    color:'black',
    marginLeft:8,
  },
  locationView:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:15,
  },
  locationRating:{
    fontSize:15,
    fontWeight:'500',
    color:'gray',
  },
  greenText:{
    color:'green',
  },
  addressView:{
    flexDirection:'row',
    marginTop:5,
    marginLeft:9,
  },
  locationAddress:{
    fontSize:15,
    color:'darkorange',
  },
  padding:{
    paddingHorizontal:15,
  },
  flexRow:{
    flexDirection:'row',
  },
});

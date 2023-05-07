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
  locationCard: {
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  imageLocation: {
    height: 234,
    width: 364,
    borderRadius: 15,
  },
  paddingView: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
  },
  locationTitle: {
    fontWeight: 'bold',
    paddingTop: 2,
    fontSize: 25,
    color: 'black',
    marginLeft: 10,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  locationRating: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  greenText: {
    color: 'green',
  },
  addressView: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 9,
    alignItems: 'center',
  },
  locationAddress: {
    fontSize: 18,
    color: 'darkorange',
  },
  padding: {
    paddingHorizontal: 15,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  viewFeature: {
    marginTop: -3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    justifyContent: 'space-between',
  },
  textFeature: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: 10,
  },
  descFeature: {
    fontSize: 17,
    paddingHorizontal: 20,
    color: 'brown',
    marginTop: 1,
  },
});

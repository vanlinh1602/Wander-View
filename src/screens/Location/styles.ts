import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pickLocation: {
    paddingTop: 20,
  },
  locationName: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
    paddingTop: 45,
  },
  paddingBottom: {
    paddingBottom: 160,
  },
  padding: {
    paddingHorizontal: 15,
  },
  flex: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  welcomeView: {
    margin: 3,
    flex: 1,
    padding: 12,
  },
  avaView: {
    margin: 2,
    alignItems: 'center',
    padding: 4,
  },
  avaImage: {
    height: 75,
    width: 75,
    borderRadius: 100,
  },
  locationBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  flexColumn: {
    flexDirection: 'column',
  },
});

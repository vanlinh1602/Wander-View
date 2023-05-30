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
    paddingBottom: 50,
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
    paddingHorizontal: 15,
  },
  searchBar: {
    alignItems: 'center',
    backgroundcolor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'purple',
    elevation: 5,
    marginVertical: 5,
  },
  imageInput: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  inputLocation: {
    height: 50,
    fontSize: 20,
    marginLeft: 10,
    color: 'black',
  },
});

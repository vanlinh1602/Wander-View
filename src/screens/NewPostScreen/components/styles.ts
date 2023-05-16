import { StyleSheet } from 'react-native';

import { FontFamily } from '../../../lib/options';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 23,
  },
  scollViewStyle: {
    marginBottom: 170,
  },
  upperView: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
  viewWriteCap: {
    flex: 1,
    marginLeft: 12,
  },
  inputCaption: {
    color: 'black',
    fontSize: 20,
  },
  locationText: {
    fontFamily: FontFamily.bold,
    fontSize: 20,
    color: 'black',
  },
  locationView: {
    flex: 1,
    marginLeft: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  locationInputText: {
    color: 'black',
    fontSize: 17,
    marginLeft: 12,
  },
  imageUri: {
    fontFamily: FontFamily.bold,
    fontSize: 20,
    color: 'black',
  },
  imageUriView: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  textInputImageUrl: {
    color: 'black',
    fontSize: 17,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
  cateText: {
    fontSize: 20,
    fontFamily: FontFamily.bold,
    color: 'black',
  },
  boxSelect: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  boxTextInput: {
    color: 'gray',
    fontFamily: FontFamily.bold,
    fontSize: 15,
  },
  iconBack: {
    height: 30,
    width: 30,
  },
});

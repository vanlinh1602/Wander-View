import { Dimensions, StyleSheet } from 'react-native';

import { FontFamily } from '../../lib/options';
const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height;
export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 25,
    marginTop: 0.5,
    backgroundColor: '#a451bd',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: WIDTH - 100,
    width: HEIGHT - 15,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#df96de',
    width: 100,
    height: 50,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FontFamily.bold,
  },
  textHeader: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: FontFamily.bold,
  },
  textStyles: {
    textAlign: 'left',
    color: 'white',
    fontSize: 18,
    fontFamily: FontFamily.regular,
  },
  textSection: {
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: FontFamily.bold,
  },
  Datepick: {
    flexDirection: 'row',
    flex: 1,
  },
});

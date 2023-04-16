import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  center: {
    height: '100%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    zIndex: -9999,
  },
  title: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    width: '65%',
    paddingLeft: '10%',
    paddingRight: '10%',
    fontSize: 48,
  },
  textBtn: {
    fontSize: 18,
    color: 'white',
    lineHeight: 30,
  },
});

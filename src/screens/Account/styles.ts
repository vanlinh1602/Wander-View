import { StyleSheet } from 'react-native';

import { FontFamily } from '../../lib/options';

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-start',
    fontFamily: FontFamily.bold,
  },
  photo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3ECFB',
  },
  catalog: {
    fontSize: 20,
  },
  logout: {
    position: 'absolute',
    flex: 1,
    right: 10,
    top: 10,
  },
});

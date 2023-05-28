import { StyleSheet } from 'react-native';

import { FontFamily } from '../../lib/options';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  eventList: {
    marginTop: 5,
  },
  eventBox: {
    padding: 10,
    marginTop: 5,
    flexDirection: 'row',
  },
  eventDate: {
    flexDirection: 'column',
    width: 46,
  },
  eventDay: {
    fontSize: 40,
    color: '#5A4CBB',
    fontFamily: FontFamily.bold,
    paddingTop: 35,
    alignSelf: 'flex-end',
  },
  eventMonth: {
    fontSize: 18,
    color: '#5A4CBB',
    fontFamily: FontFamily.regular,
  },
  eventContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: '#D4ADFC',
    padding: 10,
    borderRadius: 10,
  },
  eventInfo: {
    flexDirection: 'column',
  },
  description: {
    fontSize: 16,
    color: '#5C469C',
    fontFamily: FontFamily.regular,
  },
  eventLocation: {
    fontSize: 20,
    color: '#1D267D',
    fontFamily: FontFamily.bold,
  },
  taskName: {
    fontSize: 18,
    color: '#1D267D',
    fontFamily: FontFamily.bold,
  },
  eventDelete: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: 17,
    paddingRight: 5,
  },
  header: {
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 0,
    fontSize: 40,
    color: '#5A4CBB',
    fontFamily: FontFamily.bold,
    alignSelf: 'center',
  },
});

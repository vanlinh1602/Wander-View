import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: '#a451bd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: '#FFF',
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flex: 0.6,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  imageLocation: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 15,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  title: {
    color: '#01050d',
    fontWeight: 'bold',
    fontSize: 15,
  },

  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: -10,
  },
  item: {
    backgroundColor: 'white',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

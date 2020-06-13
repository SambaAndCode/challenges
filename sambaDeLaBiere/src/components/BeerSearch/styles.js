import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    /* position: 'absolute',
    top: 50,
    left: 30,
    right: 30 */
    marginHorizontal: 30,
    marginVertical: 30,
    zIndex: 1,
  },
  input: {
    borderRadius: 20,
    paddingLeft: 35,
    height: 40,
    backgroundColor: '#eee',
    elevation: 5,
    zIndex: 1,
  },
  icon: {
    marginRight: 10,
    position: 'absolute',
    left: 10,
    bottom: 10,
    elevation: 6,
    zIndex: 3,
  },
});

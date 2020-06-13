import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    position: 'absolute',
    right: 30,
    left: 30,
    bottom: 100,
    padding: 10,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

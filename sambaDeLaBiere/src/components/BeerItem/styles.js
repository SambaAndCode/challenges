import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    /* borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1, */
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 15,
  },
  description: {
    fontSize: 10,
  },
});

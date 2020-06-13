import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  description: {
    flexShrink: 1,
    flexGrow: 1,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

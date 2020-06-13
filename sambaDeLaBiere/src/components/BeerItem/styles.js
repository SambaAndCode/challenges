import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  infoContainer: {
    marginRight: 10,
    flexShrink: 1,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 15,
    flexGrow: 1,
  },
  description: {
    fontSize: 10,
  },
});

import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
export default StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: colors.accent,
    borderRadius: 30,
  },
});

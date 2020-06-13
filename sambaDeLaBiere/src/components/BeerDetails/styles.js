import {StyleSheet} from 'react-native';
import colors from '../../assets/colors'
export default StyleSheet.create({
  container: {},
  banner: {
    width: 90,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  ingredientsContainer: {
    paddingHorizontal: 15,
  },
  sectionHeader: {
    backgroundColor: colors.primary,
    width: '100%',
    // alignItems: 'center',
    paddingVertical: 2,
    paddingLeft: 10,
    /* borderTopColor: '#000',
    borderTopWidth: 1,
    borderBottomColor: '#000',
    borderBottomWidth: 1, */
  },
  sectionContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

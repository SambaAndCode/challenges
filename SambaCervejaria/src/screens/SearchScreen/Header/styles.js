import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    justifyContent: 'space-between',
    backgroundColor: '#ff8000',
  },
  logoContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logoStyles: {fontSize: 28, fontWeight: 'bold', color: '#fff'},
  inputContainer: {marginBottom: 5},
  searchBox: {
    zIndex: 2,
    width: '100%',
    paddingLeft: 15,
    backgroundColor: '#cc6600',
    shadowColor: '#000',
    elevation: 5,
    color: '#fff',
    fontSize: 15,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 2,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyles: {
    height: 65,
  },
  searchBox: {
    alignSelf: 'center',
    width: '92%',
    paddingLeft: 15,
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ff8000',
    textAlign: 'center',
    color: '#333',
    fontSize: 15,
  },
});

export default styles;

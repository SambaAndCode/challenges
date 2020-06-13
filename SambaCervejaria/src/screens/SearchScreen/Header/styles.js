import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  shoppingCartIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ff8000',
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ff8000',
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  inputContainer: {flex: 1},
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyles: {
    height: 65,
  },
  searchBox: {
    paddingLeft: 15,
    color: '#333',
  },
});

export default styles;

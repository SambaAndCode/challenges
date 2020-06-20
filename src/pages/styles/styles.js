import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 20,
  },
  beerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  beerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  beerImage: {
    width: '100%',
    height: 400,
    marginVertical: 15,
  },

  beerTagline: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  beerTaglineIn: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 5,
    lineHeight: 24,
  },

  beerButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#da552f',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  beerButtonTxt: {
    fontSize: 16,
    color: '#da552f',
    fontWeight: 'bold',
  },
});

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 3,
    backgroundColor: '#fff',
  },
  imageContainer: {padding: 10},
  beerImage: {width: 100, height: 100},
  descriptionContainer: {justifyContent: 'center', flexWrap: 'wrap'},
  textDescriptionContainer: {flexWrap: 'wrap'},
  textNameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
  textTaglineStyle: {
    color: '#666',
  },
});

export default styles;

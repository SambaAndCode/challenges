import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    width: '95%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ff8000',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  beerImage: {
    width: 100,
    height: 140,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  textDescriptionContainer: {
    flexWrap: 'wrap',
  },
  textNameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  textTaglineStyle: {
    color: '#666',
    flexWrap: 'wrap',
  },
  textButton: {fontWeight: 'bold', color: '#ff8000'},
});

export default styles;

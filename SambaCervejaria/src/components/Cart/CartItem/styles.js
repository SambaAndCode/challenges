import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ff8000',
  },
  itemSubcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productNameStyles: {fontSize: 18},
  productAmountStyles: {fontSize: 18, paddingRight: 8},
  unStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff8000',
  },
});

export default styles;

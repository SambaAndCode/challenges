import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux'
import { addproduct, deleteproduct, lessproduct } from '../redux/cart'

const Product = () => {	
	const products = useSelector(state => state)
	const dispatch = useDispatch()
  
  console.log(products)
  const addProduct = product => dispatch(addproduct(product))
  const lessProduct = product => dispatch(lessproduct(product))
  const deleteProduct = id => dispatch(deleteproduct(id))
	
  const renderItem = ( item ) => {
    return (
      <View style={styles.itemContainer}>
        <View styles={styles.sectionCount}>
          <TouchableOpacity style={styles.buttonCount} onPress={() => addProduct(item.product)} >
            <Text>▲</Text>
          </TouchableOpacity>
          <Text style={styles.textDescription}>
            {item.count} x
          </Text>
          {item.count>1 && <TouchableOpacity style={styles.buttonCount} onPress={() => lessProduct(item.product)} >
            <Text>▼</Text>
          </TouchableOpacity>}
        </View>
        <Image style={styles.logo} resizeMode="contain" source={{uri: item.product.image_url}} />
        <View style={styles.sectionDescription}>
          <Text style={styles.textTitle}>
            {item.product.name}
          </Text>
          <Text style={styles.textDescription}>
            {item.product.tagline}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => deleteProduct(item.product.id)}>
            <Text>Remove item</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}

	return (
    <ScrollView>
  		<View style={styles.sectionContainer}>
        <Text style={styles.textTitle}>Your products:</Text>
          <FlatList
            data={products}
            renderItem={({ item }) => renderItem(item) }
            keyExtractor={item => item.product.id}
          /> 
      </View>
    </ScrollView>
	)
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 10,
  },
  sectionDescription: {
    marginLeft: 14,
    maxWidth: 200
  },
  textTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 8,
    marginBottom: 15,
  },
  textDescription: {
    marginTop: 2,
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  logo: {
    width: 80,
    height: 100
  },
  button: {
    marginTop: 10,
    fontWeight: '600',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center'
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#FFA500'
  },
  buttonCount: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});

export default Product
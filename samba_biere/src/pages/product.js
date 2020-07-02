import React, { useEffect } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { addproduct, deleteproduct } from '../redux/cart'

const Product = (props) => {
	const { product } = props.route.params;
	const [ expanded, setExpanded] = React.useState(false);
	console.log(product, Object.keys(product.ingredients), product.ingredients[''])
	const products = useSelector(state => state)
	const dispatch = useDispatch()
  const addProduct = product => dispatch(addproduct(product))
  const deleteProduct = id => dispatch(deleteproduct(id))
	
  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  const renderIngredients = (ingredient) => {
    return (
      <View>
        <Text style={styles.textDescription}>{ingredient} ▾</Text>
        {Array.isArray(product.ingredients[ingredient]) && 
          <FlatList
            data={product.ingredients[ingredient]}
            renderItem={({ item }) => <Text>{item.name} - {item.amount.value} {item.amount.unit}</Text> }
            keyExtractor={(item, index) => item + index}
            style={styles.list}
          />  
        }
        {!Array.isArray(product.ingredients[ingredient]) && 
          <Text style={styles.list}>{product.ingredients[ingredient]}</Text>
        }
      </View>
      )
  }

	return (
		<ScrollView contentInsetAdjustmentBehavior="automatic">
			<View style={styles.itemContainer}>
	      <Image style={styles.logo} resizeMode="contain" source={{uri: product.image_url}} />
	        <Text style={styles.textTitle}>
	          {product.name}
	        </Text>
	        <Text style={styles.textDescription}>
	          {product.tagline}
	        </Text>
	        <Text style={styles.textDescription}>
	          {product.description}
	        </Text>
	    		<Text style={styles.title}>
	          Ingredients:
	        </Text>
            <FlatList
              data={Object.keys(product.ingredients)}
              renderItem={({ item }) => renderIngredients(item) }
              keyExtractor={(item, index) => index}
              style={styles.list}
            />
	        <TouchableOpacity style={styles.button} onPress={async() => {await addProduct(product); Alert.alert(
	         'Item added')}} >
	          <Text>Add to cart</Text>
	        </TouchableOpacity>
	      </View>
	    </ScrollView>
	)
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 8,
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
    marginTop: 15,
    fontWeight: '600',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  title:{
      fontSize: 14,
      fontWeight:'bold',
      marginTop: 10
  },
  list: {
  	width: '100%',
  	padding: 8	
  }
});

export default Product
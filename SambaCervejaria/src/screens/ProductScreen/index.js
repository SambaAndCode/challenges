/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Ioicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {useCart} from '../../contexts/cartContext';

import Cart from '../../components/Cart';

import styles from './styles';

import Ingredients from './Ingredients';

const ProductScreen = ({route, navigation}) => {
  const {product} = route?.params;
  const {cart, setCart, visible, setVisible} = useCart();

  const verifyProduct = () => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        return i;
      }
    }
  };

  const addProduct = () => {
    setCart([
      ...cart,
      {
        name: product.name,
        id: product.id,
        amount: 1,
      },
    ]);
  };

  const updateProduct = pos => {
    setCart(
      cart.map((item, index) => {
        if (index === pos) {
          return {
            name: product.name,
            id: product.id,
            amount: cart[index].amount + 1,
          };
        } else {
          return item;
        }
      }),
    );
  };

  const addToCart = () => {
    let pos = verifyProduct();
    pos >= 0 ? updateProduct(pos) : addProduct();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.informationSubcontainer}>
          <Text style={styles.nameStyles}>{product.name}</Text>
          <Text style={styles.taglineStyles}>{product.tagline}</Text>
        </View>
        <View style={styles.backIconContainer}>
          <Ioicons
            name="ios-arrow-back"
            size={30}
            onPress={() => {
              navigation.navigate('Search');
            }}
            color="#ff8000"
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: `${product.image_url}`}}
            style={styles.imageStyles}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            visible ? setVisible(false) : setVisible(true);
          }}
          style={styles.cartButtonStyles}>
          <View style={styles.iconCartContainer}>
            <Feather name="shopping-cart" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyles}>{product.description}</Text>
        </View>
      </View>
      <View style={styles.ingredientsTitleContainer}>
        <Text style={styles.ingredientsTextStyles}>Ingredients</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <View style={styles.ingredientsSubcontainer}>
          <ScrollView>
            {product.ingredients.malt.map((ingredients, key) => (
              <Ingredients ingredients={ingredients} key={key} />
            ))}
            {product.ingredients.hops.map((ingredients, key) => (
              <Ingredients ingredients={ingredients} key={key} />
            ))}
            <Text
              style={[
                styles.textIngredientsDescription,
                styles.yeastTextStyles,
              ]}>
              {product.ingredients.yeast}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addToCart} style={styles.buttonStyles}>
          <View style={styles.addCartButtonContainer}>
            <Text style={styles.textButtonStyles}>Add to SambaCart</Text>
          </View>
          <View style={styles.iconButtonCart}>
            <Feather name="shopping-cart" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <Cart />
    </View>
  );
};

export default ProductScreen;

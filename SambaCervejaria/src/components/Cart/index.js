import React from 'react';
import {Modal, View, Text, TouchableOpacity, ScrollView} from 'react-native';

import {useCart} from '../../contexts/cartContext';

import CartItem from './CartItem';

import styles from './styles';

const Cart = () => {
  const {visible, setVisible, cart} = useCart();
  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="slide"
      transparent={true}
      visible={visible}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>SambaCart</Text>
          </View>
          <View style={styles.cartContainer}>
            {cart.length > 0 ? (
              <ScrollView>
                {cart.map(product => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ScrollView>
            ) : (
              <Text style={styles.textStyles}>No Products</Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Cart;

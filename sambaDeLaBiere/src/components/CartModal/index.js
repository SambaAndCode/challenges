import React from 'react';
import {View} from 'react-native';
import CartItemsList from '../CartItemsList';
import {useCartContext} from '../../contexts/CartContext';
import styles from './styles';

const CartModal = () => {
  const {listAll} = useCartContext();
  return (
    <View style={styles.modal}>
      <CartItemsList items={listAll()} />
    </View>
  );
};

export default CartModal;

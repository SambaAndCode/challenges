import React from 'react';
import {FlatList, Text} from 'react-native';
import CartItem from '../CartItem';
import styles from './styles';

const CartItemsList = ({items}) => {
  return items.length ? (
    <FlatList
      data={items}
      renderItem={({item}) => <CartItem item={item} />}
      keyExtractor={item => `id-${item.data.id}`}
    />
  ) : (
    <Text style={styles.message}>Your cart is empty.</Text>
  );
};

export default CartItemsList;

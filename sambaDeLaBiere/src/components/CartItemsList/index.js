import React from 'react';
import {FlatList, Text} from 'react-native';
import CartItem from '../CartItem';
import styles from './styles';

const CartItemsList = ({items}) => {
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CartItem item={item} />}
      keyExtractor={item => `id-${item.data.id}`}
    />
  );
};

export default CartItemsList;

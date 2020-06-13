import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CartItem = ({item}) => {
  return (
    <View>
      <Text>{item.data.name}</Text>
      <Text>{item.count}</Text>
    </View>
  );
};

export default CartItem;

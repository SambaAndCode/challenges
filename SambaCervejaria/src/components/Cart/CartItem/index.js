import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CartItem = ({product}) => {
  return (
    <View key={product.id} style={styles.itemContainer}>
      <View>
        <Text style={styles.productNameStyles}>{product.name}</Text>
      </View>
      <View style={styles.itemSubcontainer}>
        <Text style={styles.productAmountStyles}>{product.amount}</Text>
        <Text style={styles.unStyles}>un</Text>
      </View>
    </View>
  );
};

export default CartItem;

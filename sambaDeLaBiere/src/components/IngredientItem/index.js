import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const IngredientItem = ({ingredient}) => {
  return (
    <View style={styles.container}>
      <Text>{ingredient.name}</Text>
    </View>
  );
};

export default IngredientItem;

import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Ingredients = ({ingredients}) => {
  return (
    <View style={styles.ingredientsContainer}>
      <View>
        <Text style={styles.textIngredientsDescription}>
          {ingredients.name}
        </Text>
      </View>
      <View style={styles.ingredientsDetailsContainer}>
        <Text
          style={[styles.textIngredientsDescription, styles.amountTextStyles]}>
          {ingredients.amount.value}
        </Text>
        <Text style={styles.textIngredientsDescription}>
          {ingredients.amount.unit}
        </Text>
      </View>
    </View>
  );
};

export default Ingredients;

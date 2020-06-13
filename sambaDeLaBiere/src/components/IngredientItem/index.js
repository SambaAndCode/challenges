import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const IngredientItem = ({ingredient}) => {
  const getFomartedName = item => {
    if (item.amount) {
      return `${item.name} / ${item.amount.value} ${item.amount.unit}`;
    }
    return item.name;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${ingredient.title}:`}</Text>
      {ingredient.data.map((item, index) => {
        return (
          <Text key={`${item.name}-${index}`} style={styles.ingredientText}>
            {getFomartedName(item)}
          </Text>
        );
      })}
    </View>
  );
};

export default IngredientItem;

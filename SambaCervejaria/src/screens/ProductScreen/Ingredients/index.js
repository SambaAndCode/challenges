import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Ingredients = ({ingredients}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={styles.textIngredientsDescription}>
          {ingredients.name}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.textIngredientsDescription, {marginRight: 5}]}>
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

import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

const BeerSearch = ({onQueryChance}) => {
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      onChangeText={text => onQueryChance(text)}/>
    </View>
  );
}

export default BeerSearch;
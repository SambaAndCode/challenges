import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const BeerItem = ({beer, onItemSelected}) => {
  return (
    <TouchableOpacity onPress={() => onItemSelected(beer)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: beer.image_url}} />
        <Text>{beer.name}</Text>
        <Text>{beer.tagline}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BeerItem;

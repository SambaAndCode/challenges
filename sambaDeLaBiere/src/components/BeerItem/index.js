import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const BeerItem = ({beer, onItemSelected}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onItemSelected(beer)}>
      <Image style={styles.image} source={{uri: beer.image_url}} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{beer.name}</Text>
        <Text style={styles.description}>{beer.tagline}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BeerItem;

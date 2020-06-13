import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const BeerItem = ({beer, onItemSelected}) => {
  return (
    <TouchableOpacity onPress={() => onItemSelected(beer)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: beer.image_url}} />
        <View>
          <Text style={styles.name}>{beer.name}</Text>
          <Text style={styles.description}>{beer.tagline}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BeerItem;

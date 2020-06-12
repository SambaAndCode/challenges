import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const BeerItem = ({beer}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: beer.image_url}}></Image>
      <Text>{beer.name}</Text>
    </View>
  );
}

export default BeerItem;
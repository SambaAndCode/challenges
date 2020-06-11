import React from 'react';
import {View, Image, Text} from 'react-native';

import SeeMoreButton from '../SeeMoreButton';

import styles from './styles';

const BeerItem = ({product}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${product.image_url}`}}
          resizeMode="contain"
          style={styles.beerImage}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.textDescriptionContainer, styles.textNameStyle]}>
          {product.name}
        </Text>
        <Text
          style={[styles.textDescriptionContainer, styles.textTaglineStyle]}>
          {product.tagline}
        </Text>
        <SeeMoreButton />
      </View>
    </View>
  );
};

export default BeerItem;

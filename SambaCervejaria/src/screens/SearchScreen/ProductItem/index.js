import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const BeerItem = ({product, navigation}) => {
  const navigateToProduct = () => {
    navigation.navigate('Product', {product});
  };
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
        <View>
          <Text style={[styles.textDescriptionContainer, styles.textNameStyle]}>
            {product.name}
          </Text>
        </View>
        <View>
          <Text
            style={[styles.textDescriptionContainer, styles.textTaglineStyle]}>
            {product.tagline}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={navigateToProduct}>
            <Text style={styles.textButton}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BeerItem;

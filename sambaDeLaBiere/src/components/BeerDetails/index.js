import React from 'react';
import {View, Text, Image} from 'react-native';
import IngredientList from '../IngredientList';
import styles from './styles';

const BeerDetails = ({beer}) => {
  return (
    <View>
      <Image style={styles.banner} source={{uri: beer.image_url}} />
      <View style={styles.infoContainer}>
        <Text>{beer.name}</Text>
        <Text>{beer.tagline}</Text>
        <Text>{beer.description}</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <IngredientList ingredients={beer.ingredients} />
      </View>
    </View>
  );
};

export default BeerDetails;

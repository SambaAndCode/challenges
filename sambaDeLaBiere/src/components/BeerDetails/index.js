import React from 'react';
import {View, Text, Image} from 'react-native';
import IngredientList from '../IngredientList';
import styles from './styles';

const BeerDetails = ({beer}) => {
  return (
    <View>
      <Image style={styles.banner} source={{uri: beer.image_url}} />
      <View style={styles.infoContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Name</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text>{beer.name}</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Tagline</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text>{beer.tagline}</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Description</Text>
        </View>
        <View style={styles.sectionContent}>
          <Text>{beer.description}</Text>
        </View>
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Ingredients</Text>
      </View>
      <View style={styles.ingredientsContainer}>
        <IngredientList ingredients={beer.ingredients} />
      </View>
    </View>
  );
};

export default BeerDetails;

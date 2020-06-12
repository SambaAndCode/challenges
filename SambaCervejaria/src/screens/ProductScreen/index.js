/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

import Ingredients from './Ingredients';

const ProductScreen = ({route}) => {
  const {product} = route?.params;
  console.log(product.ingredients);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#eee" />
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${product.image_url}`}}
          style={styles.imageStyles}
          resizeMode="contain"
        />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationSubcontainer}>
          <Text style={styles.nameStyles}>{product.name}</Text>
          <Text style={styles.taglineStyles}>{product.tagline}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionStyles}>{product.description}</Text>
        </View>
      </View>
      <View style={styles.ingredientsContainer}>
        <View style={styles.ingredientsTitleContainer}>
          <Text style={styles.ingredientsTextStyles}>Ingredients</Text>
        </View>
        <View style={styles.ingredientsSubcontainer}>
          <ScrollView>
            {product.ingredients.malt.map((ingredients, key) => (
              <Ingredients ingredients={ingredients} key={key} />
            ))}
            {product.ingredients.hops.map((ingredients, key) => (
              <Ingredients ingredients={ingredients} key={key} />
            ))}
            <Text
              style={[
                styles.textIngredientsDescription,
                {alignSelf: 'center'},
              ]}>
              {product.ingredients.yeast}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyles}>
          <Text style={styles.textButtonStyles}>Add to SambaCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;

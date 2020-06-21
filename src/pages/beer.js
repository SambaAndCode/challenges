import React from 'react';
import styles from './styles/styles';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

const Beer = ({navigation}) => (
  <View style={styles.beerContainer}>
    <ScrollView>
      <Image
        style={styles.beerImage}
        source={{uri: navigation.state.params.beer.image_url}}
      />
      <Text style={styles.beerTaglineIn}>
        {navigation.state.params.beer.tagline}
      </Text>
      <Text style={styles.beerTagline}>
        {navigation.state.params.beer.description}
      </Text>
      <Text style={styles.beerTaglineIn}>{'Ingredients:'}</Text>
      {[
        ...navigation.state.params.beer.ingredients.malt,
        ...navigation.state.params.beer.ingredients.hops,
      ].map((item, index) => (
        <Text
          key={
            index
          }>{`${item.name} (${item.amount.value} ${item.amount.unit})`}</Text>
      ))}
      <TouchableOpacity
        style={styles.beerButton}
        onPress={(item) => {
          navigation.setParams({state: {cart: {beer: item, quantity: 1}}});
          navigation.goBack();
        }}>
        <Text style={styles.beerButtonTxt}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

Beer.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.beer.name,
});

export default Beer;

import React from 'react';
import styles from './styles/styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

const Beer = ({navigation}) => (
  // <WebView source={{uri: navigation.state.params.beer.image_url}} />
  <View style={styles.beerContainer}>
    <Text style={styles.beerName}>{navigation.state.params.beer.name}</Text>
    <Text style={styles.beerTagline}>
      {navigation.state.params.beer.tagline}
    </Text>
    <Text style={styles.beerTagline}>
      {navigation.state.params.beer.description}
    </Text>
    <Image
      style={styles.beerImage}
      source={{uri: navigation.state.params.beer.image_url}}
    />
    <TouchableOpacity
      style={styles.beerButton}
      onPress={() => {
        // this.props.navigation.navigate('Beer', {beer: item});
      }}>
      <Text style={styles.beerButtonTxt}>Adicionar ao carrinho</Text>
    </TouchableOpacity>
  </View>
);

Beer.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.beer.name,
});

export default Beer;

import React from 'react';
import styles from './styles/styles';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
// import {WebView} from 'react-native-webview';

function renderItem({item}) {
  return (
    <View>
      <Text>{`${item.name} (${item.amount.value} ${item.amount.unit})`}</Text>
    </View>
  );
}

const Beer = ({navigation}) => (
  // <WebView source={{uri: navigation.state.params.beer.image_url}} />
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
      ].map((item) => (
        <Text>{`${item.name} (${item.amount.value} ${item.amount.unit})`}</Text>
      ))}
      <TouchableOpacity
        style={styles.beerButton}
        onPress={() => {
          // this.props.navigation.navigate('Beer', {beer: item});
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

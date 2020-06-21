import React, {Component} from 'react';
import api from '../services/api';
import styles from './styles/styles';
import {
  Alert,
  View,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import cart from '../assets/cart.png';

export default class Main extends Component {
  state = {
    name: '',
    page: 1,
    beers: [],
    isFetching: false,
    cart: [],
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Samba de La Biere',
    headerStyle: {
      backgroundColor: '#da552f',
    },
    headerTintColor: '#fff',
    headerRight: (
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() =>
          navigation.navigate('Cart', {
            cart: [
              {beer: {name: 'Heineken', alguma: 'COISA'}, quantity: 2},
              {beer: {name: 'Corona', alguma: 'COISA'}, quantity: 4},
              {beer: {name: 'Eisenbahn', alguma: 'COISA'}, quantity: 1},
            ],
          })
        }>
        <Image source={cart} />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    // this.loadBeers();
  }

  loadBeers = async (page = 1, per_page = 5) => {
    try {
      const {data} =
        this.state.name === ''
          ? await api.get(`beers?page=${page}&per_page=${per_page}`)
          : await api.get(`beers?beer_name=${this.state.name}`);
      let beers = data;
      if (beers.length === 0) {
        Alert.alert('Beer', 'Not found!');
      }
      if (this.state.name === '' && page !== 1) {
        beers = [...this.state.beers, ...data];
      }
      this.setState({
        page,
        beers,
        isFetching: false,
      });
    } catch (e) {
      Alert.alert('Erro ao acessar a Api!');
    }
  };

  loadMore = () => {
    const {page} = this.state;
    const nextPage = page + 1;
    this.loadBeers(nextPage);
  };

  renderItem = ({item}) => (
    <View style={styles.beerContainer}>
      <Text style={styles.beerName}>{item.name}</Text>
      <Text style={styles.beerTagline}>{item.tagline}</Text>
      <Image style={styles.beerImage} source={{uri: item.image_url}} />
      <TouchableOpacity
        style={styles.beerButton}
        onPress={() => {
          this.props.navigation.navigate('Beer', {
            beer: item,
            state: this.state,
          });
        }}>
        <Text style={styles.beerButtonTxt}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );

  onRefresh = () => {
    this.setState({isFetching: true}, () => {
      this.loadBeers();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.beerInput}
          autoCorrect={false}
          placeholder="Type here the name of beer!"
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          onSubmitEditing={() => this.loadBeers()}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.beers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.4}
          onRefresh={this.onRefresh}
          refreshing={this.state.isFetching}
        />
      </View>
    );
  }
}

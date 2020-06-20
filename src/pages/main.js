import React, {Component} from 'react';
import api from '../services/api';
import styles from './styles/styles';
import {
  Alert,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Samba de La Biere',
    headerStyle: {
      backgroundColor: '#da552f',
    },
    headerTintColor: '#fff',
  };

  state = {
    page: 1,
    beers: [],
    isFetching: false,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1, per_page = 5) => {
    try {
      const {data} = await api.get(`beers?page=${page}&per_page=${per_page}`);
      let beers = data;
      if (page !== 1) {
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
    this.loadProducts(nextPage);
  };

  renderItem = ({item}) => (
    <View style={styles.beerContainer}>
      <Text style={styles.beerName}>{item.name}</Text>
      <Text style={styles.beerTagline}>{item.tagline}</Text>
      <Image style={styles.beerImage} source={{uri: item.image_url}} />
      <TouchableOpacity
        style={styles.beerButton}
        onPress={() => {
          this.props.navigation.navigate('Beer', {beer: item});
        }}>
        <Text style={styles.beerButtonTxt}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );

  onRefresh = () => {
    this.setState({isFetching: true}, () => {
      this.loadProducts();
    });
  };

  render() {
    return (
      <View style={styles.container}>
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

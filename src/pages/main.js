import React, {Component} from 'react';
import api from '../services/api';
// import axios from 'axios';

import {
  Alert,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
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
      const beers = await api.get(`beers?page=${page}&per_page=${per_page}`);

      this.setState({
        page,
        beers: [...this.state.beers, ...beers.data],
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 20,
  },
  beerContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  beerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  beerImage: {
    width: '100%',
    height: 400,
    marginVertical: 15,
  },

  beerTagline: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  beerButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#da552f',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  beerButtonTxt: {
    fontSize: 16,
    color: '#da552f',
    fontWeight: 'bold',
  },
});

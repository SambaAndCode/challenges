/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import CartModal from '../components/CartModal';
import FloatActionButton from '../components/FloatActionButton';
// import Toolbar from '../components/Toolbar';
import BeerList from '../components/BeerList';
import BeerSearch from '../components/BeerSearch';
import resBeers from '../responde.json';

const HomeScreen = ({navigation}) => {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState('');
  const [showCart, setShowCart] = useState(false);
  const loadBeers = (query = null) => {
    axios({
      method: 'get',
      url: 'https://api.punkapi.com/v2/beers?page=1&per_page=10',
      params: {
        beer_name: query,
      },
    })
      .then(res => {
        console.log('res', res.data.length);
        setBeers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    //setBeers(resBeers)
  };

  useEffect(() => {
    loadBeers();
  }, []);

  useEffect(() => {
    loadBeers(query);
  }, [query]);

  const onQueryChange = useCallback(
    newQuery => {
      setQuery(newQuery);
    },
    [setQuery],
  );
  const onItemSelected = useCallback(
    beer => {
      navigation.navigate('Details', {beer});
    },
    [navigation],
  );

  return (
    <View style={{flex: 1}}>
      {/* <Toolbar /> */}
      <BeerSearch onQueryChance={onQueryChange} />
      <BeerList beers={beers} onItemSelected={onItemSelected} />
      {showCart && <CartModal />}
      <FloatActionButton
        onClick={() => {
          setShowCart(!showCart);
        }}
      />
    </View>
  );
};

export default HomeScreen;

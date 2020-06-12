/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, View, FlatList, StatusBar} from 'react-native';

import api from '../../services/api';

import Header from './Header';
import ProductItem from './ProductItem';

import styles from './styles';

const SearchScreen = ({navigation}) => {
  const [productList, setProductList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [beer_name, setProductName] = React.useState('');
  const [updateList, setUpdateList] = React.useState(true);
  const [notFound, setNotFound] = React.useState(false);

  const loadProducts = async () => {
    let response;
    if (beer_name) {
      response = await api.get('beers', {
        params: {
          beer_name,
        },
      });
      let data = response.data;
      if (data.length === 0) {
        setNotFound(true);
      } else {
        setProductList(response.data);
        setUpdateList(false);
        setNotFound(false);
        setPage(1);
      }
    } else {
      response = await api.get('beers', {
        params: {
          page,
        },
      });
      if (!updateList) {
        setProductList([...response.data]);
        setPage(page + 1);
        setUpdateList(true);
      } else {
        setProductList([...productList, ...response.data]);
        setPage(page + 1);
      }
    }
  };

  React.useEffect(() => {
    loadProducts();
  }, [beer_name]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ff8000" />
      <Header setProductName={setProductName} />
      <View style={styles.body}>
        {notFound ? (
          <Text style={styles.notFoundText}>Beer not found</Text>
        ) : (
          <FlatList
            data={productList}
            onEndReached={loadProducts}
            onEndReachedThreshold={0.2}
            keyExtractor={product => String(product.id)}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item: product}) => (
              <ProductItem product={product} navigation={navigation} />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

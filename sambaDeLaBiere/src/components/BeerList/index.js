import React from 'react';
import {View, FlatList, Text} from 'react-native';
import BeerItem from '../BeerItem';
import styles from './styles';

const BeerList = ({beers, onItemSelected}) => {
  return beers.length ? (
    <FlatList
      contentContainerStyle={styles.list}
      data={beers}
      renderItem={({item}) => (
        <BeerItem beer={item} onItemSelected={onItemSelected} />
      )}
      keyExtractor={item => `id-${item.id}`}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  ) : (
    <Text style={styles.message}>No item found!</Text>
  );
};

export default BeerList;

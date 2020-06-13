import React from 'react';
import {View, FlatList} from 'react-native';
import BeerItem from '../BeerItem';
import styles from './styles';

const BeerList = ({beers, onItemSelected}) => {
  return (
    <FlatList
      style={styles.list}
      data={beers}
      renderItem={({item}) => (
        <BeerItem beer={item} onItemSelected={onItemSelected} />
      )}
      keyExtractor={item => `id-${item.id}`}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default BeerList;

import React from 'react';
import {View, FlatList} from 'react-native';
import BeerItem from '../BeerItem';
// import { Container } from './styles';

const BeerList = ({beers, onItemSelected}) => {
  return (
    <View>
      <FlatList
        data={beers}
        renderItem={({item}) => (
          <BeerItem beer={item} onItemSelected={onItemSelected} />
        )}
        keyExtractor={item => `id-${item.id}`}
      />
    </View>
  );
};

export default BeerList;

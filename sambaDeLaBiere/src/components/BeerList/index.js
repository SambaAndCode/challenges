import React from 'react';
import { View, FlatList } from 'react-native';
import BeerItem from '../BeerItem'
// import { Container } from './styles';

const BeerList = ({beers}) => {
  return (
    <View>
      <FlatList
        data={beers}
        renderItem={({ item }) => (<BeerItem beer={item}></BeerItem>)}
        keyExtractor={item => `id-${item.id}`}
      />
    </View>
  );
}

export default BeerList;
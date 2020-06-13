import React from 'react';
import {View} from 'react-native';
import BeerDetails from '../components/BeerDetails';
import FloatActionButton from '../components/FloatActionButton';
import {useCartContext} from '../contexts/CartContext';
const DetailsScreen = ({route}) => {
  const {beer} = route.params;
  const {add} = useCartContext();
  return (
    <View style={{flex: 1}}>
      <BeerDetails beer={beer} />
      <FloatActionButton
        onClick={() => {
          add(beer);
        }}
      />
    </View>
  );
};

export default DetailsScreen;

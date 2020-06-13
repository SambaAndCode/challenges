import React from 'react';
import {View, ScrollView} from 'react-native';
import BeerDetails from '../components/BeerDetails';
import FloatActionButton from '../components/FloatActionButton';
import {useCartContext} from '../contexts/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const DetailsScreen = ({route}) => {
  const {beer} = route.params;
  const {add} = useCartContext();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <BeerDetails beer={beer} />
      </ScrollView>
      <FloatActionButton
        onClick={() => {
          add(beer);
        }}
        icon={<Icon name="cart-plus" size={30} color="#fff" />}
      />
    </View>
  );
};

export default DetailsScreen;

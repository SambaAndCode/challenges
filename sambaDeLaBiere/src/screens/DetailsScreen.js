import React from 'react';
import {View, ScrollView} from 'react-native';
import BeerDetails from '../components/BeerDetails';
import FloatActionButton from '../components/FloatActionButton';
import {useCartContext} from '../contexts/CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-tiny-toast';
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
          Toast.show(`${beer.name} added to cart`, {
            position: Toast.position.center,
            containerStyle: {
              backgroundColor: 'rgba(140, 135, 135, 0.8)',
              borderRadius: 5,
              marginHorizontal: 20,
            },
            textStyle: {
              color: '#fff',
            },
            mask: false,
            maskStyle: {},
            duration: 2000,
            animation: true,
          });
        }}
        icon={<Icon name="cart-plus" size={30} color="#fff" />}
      />
    </View>
  );
};

export default DetailsScreen;

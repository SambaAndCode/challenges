import React from 'react';
import styles from './styles/styles';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

const Cart = ({navigation}) => (
  <View style={styles.beerContainer}>
    <ScrollView>
      {navigation.state.params.cart.map((item, index) => (
        <Text key={index}>{`${item.beer.name} (${item.quantity})`}</Text>
      ))}
      <TouchableOpacity
        style={styles.beerButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.beerButtonTxt}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

Cart.navigationOptions = ({navigation}) => ({
  title: 'Cart',
});

export default Cart;

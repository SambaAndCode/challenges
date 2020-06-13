import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import styles from './styles';
import {useCartContext} from '../../contexts/CartContext';
const CartItem = ({item}) => {
  const {remove} = useCartContext();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.data.image_url}} />
      <View style={styles.description}>
        <Text>{item.data.name}</Text>
        <Text>{`qtd.: ${item.count}`}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          remove(item.data);
        }}>
        <Icon name="times" size={18} color={colors.accent} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

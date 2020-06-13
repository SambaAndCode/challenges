import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {useCart} from '../../../contexts/cartContext';

import styles from './styles';

import SambaLogo from '../../../assets/SambaLogo.png';

const Header = ({setProductName}) => {
  const {visible, setVisible} = useCart();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <View>
          <Image
            source={SambaLogo}
            style={styles.logoStyles}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            visible ? setVisible(false) : setVisible(true);
          }}>
          <View style={styles.shoppingCartIconContainer}>
            <Feather name="shopping-cart" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIconContainer}>
          <Icon name="ios-search" size={30} color="#ff8000" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={text => {
              setProductName(text);
            }}
            placeholder="Find your beer"
            placeholderTextColor="#aaa"
            style={styles.searchBox}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

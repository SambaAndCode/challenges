import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import SambaLogo from '../../../assets/SambaLogo.png';

const Header = ({setProductName}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={SambaLogo}
          style={styles.logoStyles}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: '#ff8000',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: 30,
            height: 30,
            marginLeft: 10,
          }}>
          <Icon name="ios-search" size={30} color="#ff8000" />
        </View>
        <View style={{flex: 1}}>
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

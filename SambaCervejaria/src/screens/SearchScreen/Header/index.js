import React from 'react';
import {View, TextInput, Image} from 'react-native';

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
      <View>
        <TextInput
          onChangeText={text => {
            setProductName(text);
          }}
          placeholder="Find your beer"
          placeholderTextColor="#aaa"
          defaultValue={''}
          autoFocus={true}
          style={styles.searchBox}
        />
      </View>
    </View>
  );
};

export default Header;

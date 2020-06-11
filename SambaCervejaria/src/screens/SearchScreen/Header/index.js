import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './styles';

const Header = ({setBeerName}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoStyles}>Samba de la Bière</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => {
            setBeerName(text);
          }}
          placeholder="Find your beer"
          placeholderTextColor="#fff"
          defaultValue={''}
          autoFocus={true}
          style={styles.searchBox}
        />
      </View>
    </View>
  );
};

export default Header;

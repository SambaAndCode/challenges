import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors';
import styles from './styles';

const BeerSearch = ({onQueryChance}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          onQueryChance(text);
        }}
      />
      <Icon style={styles.icon} name="search" size={20} color={colors.accent} />
    </View>
  );
};

export default BeerSearch;

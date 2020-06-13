import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './styles';

const FloatActionButton = ({onClick}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onClick}>
      <Text style={{fontSize: 20, color: 'white'}}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatActionButton;

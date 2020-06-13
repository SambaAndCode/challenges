import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatActionButton = ({onClick, icon}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onClick}>
      {icon}
    </TouchableOpacity>
  );
};

export default FloatActionButton;

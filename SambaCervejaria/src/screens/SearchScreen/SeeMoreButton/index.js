import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const SeeMoreButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text style={styles.textButton}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SeeMoreButton;

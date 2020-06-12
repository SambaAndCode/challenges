import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Toolbar = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Samba de la Biere</Text>
    </View>
  )
}

export default Toolbar;
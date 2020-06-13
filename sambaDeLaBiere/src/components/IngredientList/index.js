import React from 'react';
import {View, SectionList, Text} from 'react-native';
import IngredientItem from '../IngredientItem';
import styles from './styles';

const IngredientList = ({ingredients}) => {
  const sections = Object.entries(ingredients).map(entry => ({
    data: entry[0] === 'yeast' ? [{name: entry[1]}] : entry[1],
    title: entry[0],
  }));
  return (
    <View>
      <SectionList
        sections={sections}
        renderItem={({item}) => <IngredientItem ingredient={item} />}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default IngredientList;

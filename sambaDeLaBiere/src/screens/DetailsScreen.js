import React from 'react';
import {View} from 'react-native';
import BeerDetails from '../components/BeerDetails';

const DetailsScreen = ({route}) => {
  const {beer} = route.params;
  return (
    <View>
      <BeerDetails beer={beer} />
    </View>
  );
};

export default DetailsScreen;

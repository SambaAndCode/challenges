import React from 'react';
import {WebView} from 'react-native-webview';

const Beer = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.beer.image_url}} />
);

Beer.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.beer.name,
});

export default Beer;

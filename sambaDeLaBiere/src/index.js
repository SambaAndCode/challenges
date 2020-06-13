/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CartModal from './components/CartModal';
import {CartContextProvider} from './contexts/CartContext';
import colors from './assets/colors';
const Stack = createStackNavigator();

const App = () => {
  const options = {
    title: 'Samba de la Biere',
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: '#fff',
    /* headerRight: props => (
      <CartModal
        {...props}
        onPress={() => {
          // Do something
        }}
      />
    ), */
  };
  return (
    <NavigationContainer>
      <CartContextProvider items={{}}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={options}
          />
          <Stack.Screen
            name={'Details'}
            component={DetailsScreen}
            options={options}
          />
        </Stack.Navigator>
      </CartContextProvider>
    </NavigationContainer>
  );
};

export default App;

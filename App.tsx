import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';

import CartProvider from './src/contexts/CartContext';

import Home from './src/screens/Home';
import Beer from './src/screens/Beer';
import Cart from './src/screens/Cart';
import PaymentSuccess from './src/screens/PaymentSuccess';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar hidden />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Beer" component={Beer} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

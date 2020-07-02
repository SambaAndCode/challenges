import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/cartStore'
import Main from './src/pages/mainList'
import Product from './src/pages/product'
import Cart from './src/pages/userCart'

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} options={{ title: 'Samba de la Bière' }}/>
          <Stack.Screen name="Product" component={Product} options={{ title: 'Product details' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'My cart' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};


export default App;

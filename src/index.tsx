import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./screens/Search/SearchScreen";
import { StateProvider } from "./store/store";
import { BeerScreen } from "./screens/Beer/BeerScreen";
import CartScreen from "./screens/Cart/CartScreen";
import { MyTheme } from "./constants";

const Stack = createStackNavigator();

export default function App() {
  const headerStyle = {
    title: "Teste Ecommerce",
    headerStyle: {
      backgroundColor: MyTheme.colors.secondary,
    },
    headerTintColor: MyTheme.colors.primary,
    // headerTitleStyle: {
    //   fontWeight: "bold",
    // },
  };

  return (
    <StateProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: "Teste Ecommerce",
              ...headerStyle,
            }}
          />
          <Stack.Screen
            name="Beer"
            component={BeerScreen}
            options={{
              title: "Teste Ecommerce",
              ...headerStyle,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              title: "Teste Ecommerce",
              ...headerStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

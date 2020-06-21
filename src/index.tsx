import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./screens/Search/SearchScreen";
import { StateProvider } from "./store/store";
import { BeerScreen } from "./screens/Beer/BeerScreen";

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ffca28",
    background: "#fff",
  },
};

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: "Teste Ecommerce",
            }}
          />
          <Stack.Screen name="Beer" component={BeerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

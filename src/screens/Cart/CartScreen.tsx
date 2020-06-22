import React, { useContext, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Text,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ProductCard } from "./ProductCard";
import { store } from "../../store/store";
import { Creators as beerActions } from "../../store/ducks/beer";
import { SearchField } from "../../components/SearchField";
import { CartHeaderTag } from "../../components/CartHeaderTag";

export default function CartScreen({}) {
  const { state } = useContext(store);
  const { cart } = state;

  return (
    <View style={styles.container}>
      {cart && cart.products && cart.products.length > 0 ? (
        <FlatList
          data={cart.products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.beer.id + ""}
        />
      ) : (
        <View style={styles.notFound}>
          <Icon name="frown-o" size={25} color="#c62828" />
          <Text style={styles.textTitle}>No drinks in the cart</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#e2e2e2",
    height: "100%",
  },
  notFound: {
    flexDirection: "row",
    backgroundColor: "#ef9a9a",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    margin: 20,
    borderRadius: 10,
    padding: 10,
  },
  textTitle: {
    color: "#c62828",
    padding: 10,
    fontSize: 20,
  },
});

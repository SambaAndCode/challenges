import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight } from "react-native-gesture-handler";

export const CartHeaderTag = ({ onPress, quantity }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Icon name="shopping-cart" size={27} color="#000" />
        </View>
        <View style={styles.cartQuantity}>
          <Text style={styles.cartQuantityText}>{quantity}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: "100%",
    paddingHorizontal: 20,
    borderRadius: 2,
    backgroundColor: "#ffca28",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    top: 7,
  },
  cartQuantity: {
    position: "relative",
    backgroundColor: "red",
    width: 20,
    top: 2,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  cartQuantityText: {
    color: "white",
    fontSize: 15,
  },
});

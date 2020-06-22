import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters";
import { MyTheme } from "../constants";

export const CartHeaderTag = ({ onPress, quantity }) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="shopping-cart"
            size={moderateScale(27)}
            color={MyTheme.colors.secondary}
          />
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
    paddingHorizontal: moderateScale(20),
    borderRadius: 2,
    backgroundColor: MyTheme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    top: moderateScale(7),
  },
  cartQuantity: {
    position: "relative",
    backgroundColor: "red",
    width: moderateScale(20),
    top: 2,
    left: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(7),
  },
  cartQuantityText: {
    color: "white",
    fontSize: moderateScale(15),
  },
});

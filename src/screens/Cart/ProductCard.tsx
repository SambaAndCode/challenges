import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IProduct } from "../../types";
import { moderateScale } from "react-native-size-matters";
import { MyTheme } from "../../constants";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { beer, quantity } = product;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: beer.image_url }} style={styles.productImage} />
      </View>
      <View style={styles.productContent}>
        <Text style={styles.productTitleText}>{beer.name}</Text>
        <View style={styles.productQuantityRow}>
          <Text style={styles.productQuantityText}>Quantity: </Text>
          <Text style={styles.productQuantityNumber}>{quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: MyTheme.colors.backgroundSecondary,
    padding: moderateScale(10),
    borderColor: MyTheme.colors.border,
    borderBottomWidth: 1,
  },
  productContent: {
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: moderateScale(80),
    height: moderateScale(310),
    resizeMode: "stretch",
    transform: [{ rotate: "90deg" }],
  },
  productTitleText: {
    color: MyTheme.colors.text.default,
    fontSize: moderateScale(22),
    fontWeight: "bold",
    marginVertical: moderateScale(10),
  },
  productQuantityRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  productQuantityText: {
    color: MyTheme.colors.text.default,
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  productQuantityNumber: {
    color: "white",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    backgroundColor: "red",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
});

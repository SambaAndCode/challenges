import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IProduct } from "../../types";

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
    backgroundColor: "#fff",
    padding: 10,
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  productContent: {
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  productImage: {
    width: 80,
    height: 310,
    resizeMode: "stretch",
    transform: [{ rotate: "90deg" }],
  },
  productTitleText: {
    color: "#424242",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  productQuantityRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  productQuantityText: {
    color: "#424242",
    fontSize: 20,
    fontWeight: "bold",
  },
  productQuantityNumber: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

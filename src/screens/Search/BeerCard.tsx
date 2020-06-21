import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IBeer } from "../../types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export const BeerCard = ({ beer }: { beer: IBeer }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() => navigation.navigate("Beer", { beer })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: beer.image_url }} style={styles.beerImage} />
      </View>
      <View style={styles.beerContent}>
        <Text style={styles.beerTitleText}>{beer.name}</Text>

        <View style={styles.beerHeader}>
          <Text style={styles.beerTagLine}>{beer.tagline}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#ccc",
    margin: 10,
    backgroundColor: "#fff",
  },
  beerContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  beerImage: {
    width: 80,
    height: 310,
    resizeMode: "stretch",
    transform: [{ rotate: "90deg" }],
  },
  beerHeader: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  beerTitleText: {
    color: "#424242",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  beerTagLine: {
    color: "#000",
    fontSize: 14,
    backgroundColor: "#ffca28",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  beerBody: {
    // width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { IBeer } from "../../types";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";
import { MyTheme } from "../../constants";

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
    padding: moderateScale(10),
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: moderateScale(10),
    borderStyle: "solid",
    borderColor: MyTheme.colors.border,
    margin: 10,
    backgroundColor: MyTheme.colors.backgroundSecondary,
  },
  beerContent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
  },
  beerImage: {
    width: moderateScale(80),
    height: moderateScale(310),
    resizeMode: "stretch",
    transform: [{ rotate: "90deg" }],
  },
  beerHeader: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  beerTitleText: {
    color: MyTheme.colors.text.title,
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginVertical: moderateScale(10),
  },
  beerTagLine: {
    color: MyTheme.colors.secondary,
    fontSize: moderateScale(14),
    backgroundColor: MyTheme.colors.primary,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(15),
  },
  beerBody: {
    alignItems: "center",
    justifyContent: "center",
    padding: moderateScale(5),
  },
});

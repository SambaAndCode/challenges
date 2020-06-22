import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { store } from "../../store/store";
import { Types } from "../../store/ducks/cart";
import { CartHeaderTag } from "../../components/CartHeaderTag";
import { moderateScale } from "react-native-size-matters";
import { MyTheme } from "../../constants";

export const BeerScreen = ({ route, navigation }) => {
  const { beer } = route.params;
  const { state, dispatch } = useContext(store);
  const { cart } = state;
  navigation.setOptions({
    title: beer.name,
    headerRight: () => (
      <CartHeaderTag
        onPress={() => navigation.push("Cart")}
        quantity={cart.totalQuantity}
      />
    ),
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: beer.image_url }} style={styles.beerImage} />
        </View>
        <View style={styles.beerHeader}>
          <View>
            <Text style={styles.beerTitle}>{beer.name}</Text>
          </View>
          <View>
            <Text style={styles.tagline}>{beer.tagline}</Text>
          </View>
        </View>
        <View style={styles.beerContent}>
          <View style={styles.beerBody}>
            <Text style={styles.beerDetailText}>{beer.description}</Text>
          </View>
          <Text style={styles.beerIngredientsText}>Ingredients:</Text>
          <View style={styles.beerIngredients}>
            <Text style={styles.beerDetailText}>Hops:</Text>
            {!!beer.ingredients &&
              beer.ingredients.hops.map((ingredient, index) => (
                <View style={styles.beerIngredient} key={index}>
                  <Text style={styles.beerDetailText}>{ingredient.name}:</Text>
                  <Text style={styles.beerDetailText}>
                    {ingredient.amount.value}({ingredient.amount.unit})
                  </Text>
                </View>
              ))}
            <Text style={styles.beerDetailText}>Malt:</Text>
            {!!beer.ingredients &&
              beer.ingredients.malt.map((ingredient, index) => (
                <View style={styles.beerIngredient} key={index}>
                  <Text style={styles.beerDetailText}>{ingredient.name}:</Text>
                  <Text style={styles.beerDetailText}>
                    {ingredient.amount.value}({ingredient.amount.unit})
                  </Text>
                </View>
              ))}
            <Text style={styles.beerDetailText}>Yeast:</Text>
            <View style={styles.beerIngredient}>
              <Text style={styles.beerDetailText}>
                {beer.ingredients.yeast}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableHighlight
        onPress={() => {
          dispatch({ type: Types.ADD_TO_CART, payload: { beer } });
        }}
      >
        <View style={styles.addToCartButton}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
    backgroundColor: MyTheme.colors.backgroundSecondary,
    justifyContent: "space-between",
  },
  beerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: moderateScale(10),
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  beerImage: {
    width: moderateScale(90),
    height: moderateScale(300),
    resizeMode: "stretch",
  },
  beerHeader: {
    width: "100%",
    padding: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  beerTitle: {
    color: MyTheme.colors.text.title,
    fontSize: moderateScale(22),
    fontWeight: "bold",
    textAlign: "justify",
  },
  beerBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  tagline: {
    color: MyTheme.colors.secondary,
    fontSize: moderateScale(14),
    backgroundColor: MyTheme.colors.primary,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(15),
  },
  beerDetailText: {
    color: MyTheme.colors.text.default,
    fontSize: moderateScale(12),
    textAlign: "justify",
  },
  beerIngredientsText: {
    color: MyTheme.colors.text.default,
    fontSize: moderateScale(12),
    textAlign: "justify",
    fontWeight: "bold",
  },
  beerIngredients: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  beerIngredient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: moderateScale(10),
  },
  addToCartButton: {
    height: moderateScale(70),
    fontWeight: "bold",
    backgroundColor: MyTheme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: MyTheme.colors.secondary,
  },
  buttonText: {
    fontSize: moderateScale(18),
    color: MyTheme.colors.secondary,
    fontWeight: "bold",
  },
});

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
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    // minHeight: Dimensions.get("window").height,
  },
  beerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 10,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  beerImage: {
    width: 90,
    height: 300,
    resizeMode: "stretch",
  },
  beerHeader: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  beerTitle: {
    color: "#4e4e4e",
    fontSize: 22,
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
    color: "#000",
    fontSize: 14,
    backgroundColor: "#ffca28",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  beerDetailText: {
    color: "#424242",
    fontSize: 12,
    textAlign: "justify",
  },
  beerIngredientsText: {
    color: "#424242",
    fontSize: 12,
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
    paddingHorizontal: 10,
  },
  addToCartButton: {
    height: 70,
    fontWeight: "bold",
    backgroundColor: "#ffca28",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fbc02d",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
});

import React, { useContext, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { BeerCard } from "./BeerCard";
import { store } from "../../store/store";
import { Creators as beerActions } from "../../store/ducks/beer";
import { SearchField } from "../../components/SearchField";
import { CartHeaderTag } from "../../components/CartHeaderTag";
import { moderateScale } from "react-native-size-matters";
import { MyTheme } from "../../constants";

export default function SearchScreen({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const [searchName, setSearchName] = useState("");
  const [page, setSetPage] = useState(0);
  const { state, dispatch } = useContext(store);
  const { beer, cart } = state;
  navigation.setOptions({
    headerRight: () => (
      <CartHeaderTag
        onPress={() => navigation.push("Cart")}
        quantity={cart.totalQuantity}
      />
    ),
  });
  const search = (page = 1) => {
    setSetPage(page);
    beerActions.fetchBeers({ beer_name: searchName, page }, dispatch);
  };
  const searchMore = () => {
    const newPage = page + 1;
    setSetPage(newPage);
    beerActions.fetchMoreBeers(
      { beer_name: searchName, page: newPage },
      dispatch
    );
  };
  useEffect(() => {
    search();
  }, []);

  if (!beer || beer.isLoading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator color={MyTheme.colors.primary} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={beer.beers}
        renderItem={({ item }) => <BeerCard beer={item} />}
        keyExtractor={(item) => item.id + ""}
        refreshing={beer.isLoading}
        ListHeaderComponent={
          <SearchField
            value={searchName}
            onChangeText={setSearchName}
            onSubmit={search}
          />
        }
        onRefresh={() => (
          <ActivityIndicator color={MyTheme.colors.primary} size="large" />
        )}
        ListEmptyComponent={
          <View style={styles.notFound}>
            <Icon name="frown-o" size={moderateScale(25)} color="#c62828" />
            <Text style={styles.textTitle}>No drink found</Text>
          </View>
        }
        onEndReached={() => searchMore()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: MyTheme.colors.background,
  },
  notFound: {
    flexDirection: "row",
    backgroundColor: "#ef9a9a",
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(50),
    margin: moderateScale(20),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  textTitle: {
    color: MyTheme.colors.text.title,
    padding: moderateScale(10),
    fontSize: moderateScale(20),
  },
  loadingView: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: 1,
  },
});

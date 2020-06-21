import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const SearchField = ({ value, onChangeText, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={15} color="#000" />
      <TextInput
        style={styles.textField}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Select your drink"
        // clearButtonMode="while-editing"
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 50,
    paddingHorizontal: 20,
    margin: 20,
    borderRadius: 40,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textField: {
    height: "100%",
    color: "#000",
    fontSize: 20,
  },
});

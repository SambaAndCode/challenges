import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters";
import { MyTheme } from "../constants";

export const SearchField = ({ value, onChangeText, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={moderateScale(15)}
        color={MyTheme.colors.border}
      />
      <TextInput
        style={styles.textField}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Select your drink"
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(50),
    paddingHorizontal: moderateScale(20),
    margin: moderateScale(20),
    borderRadius: moderateScale(40),
    flexDirection: "row",
    backgroundColor: MyTheme.colors.backgroundSecondary,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: MyTheme.colors.border,
    borderWidth: 1,
  },
  textField: {
    height: "100%",
    color: MyTheme.colors.secondary,
    fontSize: moderateScale(20),
  },
});

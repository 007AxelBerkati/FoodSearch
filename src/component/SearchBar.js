import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
  },

  inputStyle: {
    flex: 1,
    fontSize: 18,
  },

  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

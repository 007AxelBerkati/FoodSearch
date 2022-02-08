import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {/* <Text>Results : {results.length}</Text> */}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

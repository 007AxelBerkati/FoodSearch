import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function ResultsShowsScreen({ navigation }) {
  const [result, setResult] = useState([]);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    // console.log("result : ", result);
  };
  //   console.log("Get Id : ", id);
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
  },
});

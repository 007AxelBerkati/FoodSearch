import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultsList from "../component/ResultsList";
import SearchBar from "../component/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen({ navigation }) {
  const [term, setTerm] = useState("");
  const [SearchApi, errorMessage, results] = useResults();

  // console.log(results);

  const filterResultsByPrice = (price) => {
    // price === '$' / '$$' '$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View style={styles.page}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => SearchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>we have found {results.length} results</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          // onPress={() => navigation.navigate("ResultsShow", {item.id})}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Bit pricier"
          // onPress={() => navigation.navigate("ResultsShow")}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          // onPress={() => navigation.navigate("ResultsShow")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    backgroundColor: "white",
  },
});

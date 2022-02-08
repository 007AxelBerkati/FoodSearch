import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ResultsList from "../component/ResultsList";
import SearchBar from "../component/SearchBar";
import useResults from "../hooks/useResults";

export default function SearchScreen() {
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
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => SearchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
      <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
});

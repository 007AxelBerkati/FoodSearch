import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const SearchApi = async (searchTerm) => {
    // console.log("Hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    SearchApi("pasta");
  }, []);

  return [SearchApi, errorMessage, results];
};

const styles = StyleSheet.create({});

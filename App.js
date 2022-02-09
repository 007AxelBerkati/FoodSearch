import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowsScreen from "./src/screens/ResultsShowsScreen";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Bussiness Search",
    },
  }
);

export default createAppContainer(navigator);

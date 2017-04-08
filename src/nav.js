// @flow
import { StackNavigator } from "react-navigation";
import Home from "./home";
import Page from "./page";

export default StackNavigator({
	Home: { screen: Home },
	Page: { screen: Page }
}, { initialRouteName: "Home" });
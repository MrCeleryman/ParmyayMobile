// @flow
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Home from "./home";
import Page from "./page";
import Test from "./testPage";

const Drawer =  DrawerNavigator({
	Page: { screen: Page },
	Test: { screen: Test }
}, { 
	initialRouteName: "Page",
	drawerWidth: 200,
	headerMode: "screen"
 });

 export default StackNavigator({
	Home: { screen: Home },
	Drawer: { screen: Drawer }
}, { 
	initialRouteName: "Home",
	headerMode: "screen"
 });

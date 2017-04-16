// @flow
import { DrawerNavigator, StackNavigator } from "react-navigation";
import Home from "./home";
import Page from "./page";

const Drawer =  DrawerNavigator({
	Home: { screen: Home },
	Page: { screen: Page }
}, { 
	initialRouteName: "Home",
	drawerWidth: 200
 });

 export default StackNavigator({
	Drawer: { screen: Drawer }
}, { 
	initialRouteName: "Drawer",
 });
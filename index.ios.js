//@flow
import { AppRegistry, StatusBar } from "react-native";
import App from "./src";

StatusBar.setBarStyle("light-content");
AppRegistry.registerComponent("Parmyaymobile", () => App);
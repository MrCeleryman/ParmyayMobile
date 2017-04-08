//@flow
import { StyleSheet } from "react-native";
import theme from "./theme";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.COLOR.LIGHT,
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	}
});
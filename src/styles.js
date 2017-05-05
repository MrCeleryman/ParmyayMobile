// @flow
import { StyleSheet } from "react-native";
import theme from "./theme";

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.COLOR.LIGHT,
	},
	containerContent: {
		justifyContent: "center",
		alignItems: "center",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10
	},
	buttonbar: {
		flexDirection: "row",
		margin: 10
	},
	input: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginHorizontal: 20
	},
	textInput: {
		flex: 1
	},
	image: {
		width: 30,
		height: 30
	},
	icon: {
		width: 20,
		height: 20
	}
});

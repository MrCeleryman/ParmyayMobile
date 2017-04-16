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
	},
	input: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 16,
		lineHeight: 21,
		flex: 2
	},
	label: {
		fontSize: 16,
		paddingLeft: 20,
		flex: 1
	},
	formContainer: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});
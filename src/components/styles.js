//@flow
import { StyleSheet } from "react-native";
import theme from "../theme";

export default StyleSheet.create({
	buttonFlat: {
		backgroundColor: theme.COLOR.TRANSPARENT,
		margin: 5,
		padding: 15,
		flexDirection: "row",
		justifyContent: "center"
	},
	buttonWide: {
		flex: 1
	},
	buttonRaised: {
		backgroundColor: theme.COLOR.ACCENT,
		margin: 5,
		flexDirection: "row",
		justifyContent: "center",
		padding: 15,
		borderRadius: 2,
		elevation: 5
	},
	buttonRaisedDisabled: {
		backgroundColor: theme.COLOR.DISABLED,
		elevation: 0
	},
	buttonFlatDisabled: {
		color: theme.COLOR.DISABLED
	},
	buttonRaisedText: {
		color: theme.COLOR.LIGHT,
		fontWeight: "500"
	},
	buttonFlatText: {
		color: theme.COLOR.ACCENT,
		fontWeight: "500"
	},
	input: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 16,
		lineHeight: 21,
		flex: 3,
		flexDirection: "row"
	},
	label: {
		fontSize: 16,
		paddingLeft: 20,
		flex: 1,
		flexDirection: "row"
	},
	formContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start'
	}
});
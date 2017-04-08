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
	}
});
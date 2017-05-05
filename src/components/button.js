// @flow
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import type { Button } from "../types";

export default (props: Button) => {

	const getStyle = () => ([
		props.wide ? styles.buttonWide : null,
		props.flat ? styles.buttonFlat : styles.buttonRaised,
		props.style,
		props.disabled && !props.flat ? styles.buttonRaisedDisabled : null
	]);

	const getTextStyle = () => ([
		props.flat ? styles.buttonFlatText : styles.buttonRaisedText,
		props.textStyle,
		props.disabled && props.flat ? styles.buttonFlatDisabled : null
	]);

	return (
		<TouchableOpacity
			onPress={!props.disabled ? props.onPress : null}
			style={getStyle()}>
			{props.text && typeof props.text == "string" ?
				<Text
					style={getTextStyle()}>
					{props.text.toUpperCase()}
				</Text> :
				props.children}
		</TouchableOpacity>
	);
}

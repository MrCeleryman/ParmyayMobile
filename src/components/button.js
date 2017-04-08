//@flow
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import type { Button } from "../types";

export default (props: Button) => {

	const getStyle = (props: Button, style: any) => ([
		props.flat ? style.buttonFlat : style.buttonRaised,
		props.style,
		props.disabled && !props.flat ? style.buttonRaisedDisabled : null
	]);

	const getTextStyle = (props: Button, style: any) => ([
		props.flat ? style.buttonFlatText : style.buttonRaisedText,
		props.textStyle,
		props.disabled && props.flat ? style.buttonFlatDisabled : null
	]);

	return (
		<TouchableOpacity
			onPress={!props.disabled ? props.onPress : null}
			style={getStyle(props, styles)}>
			{props.text && typeof props.text == "string" ?
				<Text
					style={getTextStyle(props, styles)}>
					{props.text.toUpperCase()}
				</Text> :
				props.children}
		</TouchableOpacity>
	);
}
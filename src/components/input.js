// @flow
import React from "react";
import { TextInput, View, Image } from "react-native";
import styles from "./styles";
import type { Input } from "../types";

export default (props: Input) => (
	<View style={styles.formContainer}>
		{props.iconLeft && 
			<Image 
				style={styles.image}
				source={{uri: props.src}}/>}
		<TextInput
			secureTextEntry={props.secureTextEntry}
			placeholder={props.label}
			autoCorrect={false}
			value={props.value}
			onChangeText={props.onChangeText}
			style={styles.input}
		/>
		{props.iconRight && 
			<Image 
				style={styles.image}
				source={{uri: props.src}}/>}
	</View>
);

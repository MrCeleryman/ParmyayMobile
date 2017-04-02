//@flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class Parmyaymobile extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Parmyaymobile
				</Text>
			</View>
		);
	}
}
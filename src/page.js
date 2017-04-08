//@flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class Home extends Component {
	static navigationOptions = {
		title: "Test Page"
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Test Page
				</Text>
			</View>
		);
	}
}
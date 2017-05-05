// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "./components";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class testPage extends Component {
	static navigationOptions = {
		title: "Test page",
		drawerIcon: () => <Icon name="react"/>,
		drawerLabel: "Go to testPage"
	};
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Test Page please ignore
				</Text>
				<Button text="Go back home" onPress={() => this.props.navigation.goBack()} />
			</View>
		);
	}
}

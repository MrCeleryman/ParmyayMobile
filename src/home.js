//@flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "./components";
import styles from "./styles";

export default class Home extends Component {

	constructor(props: any) {
		super(props);
	}

	static navigationOptions = {
		title: "ParmyayMobile"
	};

	navigateToPage = () => {
		this.props.navigation.navigate("Page");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Parmyaymobile
				</Text>
				<Button text="Go to test page" onPress={this.navigateToPage} />
				<Button text="Flat button" flat />
				<Button text="Raised disabled" disabled />
				<Button text="Flat disabled" flat disabled />
			</View>
		);
	}
}
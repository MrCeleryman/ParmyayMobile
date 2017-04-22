//@flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "./components";
import styles from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {

	constructor(props: any) {
		super(props);
	}

	static navigationOptions = {
		title: "Home Page",
		drawer: () => ({
			label: 'Parmyay',
			icon: () => (
				<Icon name="home" />
			),
		}),
	};

	navigateToPage = () => {
		this.props.navigation.navigate("Page");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Parmyaymobile!
				</Text>
				<Input label="Email" iconLeft src="http://pizzalinos.letseat.at/images/social_urbanspoon.png?1445209169"/>
				<Input label="Password" iconLeft src="https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Safety01-128.png"/>
				<View style={styles.buttonbar}>
				  <Button text="Signup" wide disabled />
			 	  <Button text="Signin" wide disabled />
				</View>
			</View>
		);
	}
}
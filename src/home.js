//@flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "./components";
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
				
				<Button text="Go to rate a Parmy" onPress={this.navigateToPage} />
				<Button text="Open Drawer" flat onPress={this.props.navigation.navigate("DrawerOpen")}/>
				<Button text="Close Drawer" disabled onPress={this.props.navigation.navigate("DrawerClose")}/>
				<Button text="Flat disabled" flat disabled />
			</View>
		);
	}
}
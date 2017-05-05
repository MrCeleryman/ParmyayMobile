// @flow
import React, { Component } from "react";
import { Text, TextInput, View, Animated, Image, Easing, ScrollView } from "react-native";
import { Button, Input } from "./components";
import styles from "./styles";

export default class Home extends Component {
	spinButtonValue: number;
	spinValue: number
	spinningButton: boolean;
	spinning: boolean
	constructor(props: any) {
		super(props);
		this.spinValue = new Animated.Value(0);
		this.spinButtonValue = new Animated.Value(0);
	}

	static navigationOptions = {
		title: "Home Page"
	};

	spinButton = () => {
		if (!this.spinningButton) {
			this.spinButtonValue.setValue(0);
			this.spinningButton = true;
			Animated.timing(
				this.spinButtonValue,
				{
					toValue: 1,
					duration: 200,
					easing: Easing.linear
				}
			).start(() => this.spinningButton = false);
		}
	}

	spin = () => {
		if (!this.spinning) {
			this.spinValue.setValue(0);
			this.spinning = true;
			Animated.timing(
				this.spinValue,
				{
					toValue: 1,
					duration: 200,
					easing: Easing.linear
				}
			).start(() => this.spinning = false);
		}
	}

	navigateToPage = () => {		
		this.props.navigation.navigate("Drawer");
	}

	render() {
		const spinButton = this.spinButtonValue.interpolate({
			inputRange: [0, 1],
			outputRange: ["0deg", "360deg"]
		});
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ["0deg", "360deg"]
		});
		return (
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.containerContent}>
				<Text style={styles.welcome}>
					Welcome to Parmyaymobile!
				</Text>
				<Input label="Email" iconLeft src="http://pizzalinos.letseat.at/images/social_urbanspoon.png?1445209169" />
				<Input label="Password" iconLeft src="https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Safety01-128.png" />
				<View style={styles.buttonbar}>
					<Button text="Signup" wide disabled />
					<Button text="Signin" wide disabled />
				</View>
				<Button text="Go to test page" onPress={this.navigateToPage} />
				<Animated.View
					style={{ transform: [{ rotate: spinButton }] }}>
					<Button text="Spin me!" onPress={this.spinButton} />
				</Animated.View>
				<View style={styles.input}>
					<Animated.View
						style={{ transform: [{ rotate: spin }] }}>
						<Image style={styles.image} source={require("../images/chicken.jpg")} />
					</Animated.View>
					<TextInput onChangeText={this.spin} placeholder="Type here" style={styles.textInput} />
				</View>
			</ScrollView>
		);
	}
}

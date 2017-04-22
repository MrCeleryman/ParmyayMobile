//@flow
import React, { Component } from "react";
import { Text, TextInput, View, Animated, Image, Easing, ScrollView } from "react-native";
import { Button } from "./components";
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
		title: "ParmyayMobile"
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
		this.props.navigation.navigate("Page");
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
					Welcome to Parmyaymobile
				</Text>
				<Button text="Go to test page" onPress={this.navigateToPage} />
				<Button text="Flat button" flat />
				<Button text="Raised disabled" disabled />
				<Button text="Flat disabled" flat disabled />
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
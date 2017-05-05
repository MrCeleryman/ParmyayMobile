// @flow

type Button = {
	disabled?: boolean,
	style?: any,
	text: string,
	textStyle?: any,
	flat?: boolean,
	onPress?: Function,
	children?: any
};

type Input = {
	label: string,
	iconLeft?: boolean,
	iconRight?: boolean,
	src?: string,
	value?: string,
	onChangeText?: Function,
	placeholder?: string,
	secureTextEntry?: string
};

export type { Button, Input };

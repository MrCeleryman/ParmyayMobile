// @flow
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from "./styles";
import type { Input } from "../types";

export default (props: Input) => {

	const getStyle = (props: Input, style: any) => ([
		style.Input
	]);

	const getLabelStyle = (props: Input, style: any) => ([
		style.label
	]);

    const getContainerStyle = (props: Input, style: any) => ([
		style.formContainer
	]);

	return (
		<View style={getContainerStyle(props, styles)}>
            <Text style={getLabelStyle(props, styles)}>
                {props.label}
            </Text>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                value={props.value}
                onChangeText={props.onChangeText}
                style={getStyle(props, styles)}
            />
        </View>
	);
}

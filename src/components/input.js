// @flow
import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import styles from "./styles";
import type { Input } from "../types";

export default (props: Input) => {

	return (
		<View style={styles.formContainer}>
            {props.iconLeft && <Image 
              style={{width: 50, height: 50}}
              source={{uri: props.src}}
            />}
            <Text style={styles.label}>
                {props.label}
            </Text>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                value={props.value}
                onChangeText={props.onChangeText}
                style={styles.input}
            />
            {props.iconRight && <Image 
              style={{width: 50, height: 50}}
              source={{uri: props.src}}
            />}
        </View>
	);
}

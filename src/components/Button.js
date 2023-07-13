import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../themes";

const Button = ({ onPress, title }) => {
	return (
		<View style={{ width: '100%' }}>
			<TouchableOpacity
				style={styles.button}
				onPress={onPress}>
				<Text style={styles.textLogin}>{title}</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		height: 40,
		backgroundColor: Colors.primaryColor,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 16
	},
	textLogin: {
		color: 'white',
		fontSize: 14,
	}

})
export default Button
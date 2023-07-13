import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Styles } from '../../themes'
import { Button, EditText, EditTextPassword, Gap } from '../../components'
import { useLogin } from '../../hooks'

const Login = () => {
	const {
		email, 
		password, 
		isPassword,
		handleEmailChange, 
		handlePasswordChange,
		handleIsPasswordChange
	} = useLogin()

	return (
		<View style={Styles.containerCenter}>
			<Text style={Styles.textLargeSemiBold}>Login</Text>
			<Gap height={40} />
			<EditText
				placeholder='Email'
				keyboardType='email-address'
				value={email}
				width='92%'
				onChangeText={handleEmailChange} />
			<Gap height={16} />
			<EditTextPassword
				placeholder='Password'
				width='92%'
				secureTextEntry={isPassword}
				onShowHide={handleIsPasswordChange}
				value={password}
				onChangeText={handlePasswordChange} />
			<Gap height={16} />
			<Button title='Login' />			
			<Gap height={50} />
			<TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
				<Text style={[Styles.textSmall, {color: Colors.secondaryColor}]}>Forgot Password?</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Login
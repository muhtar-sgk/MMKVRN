import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Styles } from '../../themes'
import { Button, EditText, EditTextPassword, Gap } from '../../components'
import { useLogin } from '../../hooks'
import {MMKV} from 'react-native-mmkv'

export const storage = new MMKV()

const Login = () => {
	const {
		email, 
		password, 
		isPassword,
		handleEmailChange, 
		handlePasswordChange,
		handleIsPasswordChange
	} = useLogin()

	useEffect(() => {
    const storedEmail = storage.getString('email')
    const storedPassword = storage.getString('password')

    if (storedEmail) {
			handleEmailChange(storedEmail)
    }

    if (storedPassword) {
			handleIsPasswordChange(storedPassword)
    }
  }, [])

	const saveProfile = () => {
    storage.set('email', email)
    storage.set('password', password)

    alert('Profil berhasil disimpan!')
  }


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
			<Button 
				title='Login' 
				onPress={saveProfile}/>			
			<Gap height={50} />
			<TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
				<Text style={[Styles.textSmall, {color: Colors.secondaryColor}]}>Forgot Password?</Text>
			</TouchableOpacity>
			<Gap height={8}/>
			<Text>Email : {email}</Text>
			<Text>Password : {password}</Text>
		</View>
	)
}

export default Login
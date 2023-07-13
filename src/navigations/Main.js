import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../screens/splash/Splash'
import Login from '../screens/login/Login'

const Stack = createNativeStackNavigator()

const Main = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name='Splash' 
					component={Splash}
					options={{ headerShown: false}}
				/>
				<Stack.Screen 
					name='Login' 
					component={Login}
					options={{ headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Main
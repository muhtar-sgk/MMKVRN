import React, { useEffect } from 'react'
import { Text, Animated } from 'react-native'
import { Styles } from '../../themes'

const Splash = ({ navigation }) => {
	const fadeAnim = new Animated.Value(0)

	useEffect(() => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 3000,
				useNativeDriver: false
			}
		).start(async () => {
			navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
		})
	}, [])

	return (
		<Animated.View
			style={[Styles.containerCenter, { opacity: fadeAnim }]}
		>
			<Text style={Styles.textSplash}>RSUD Ciawi</Text>
		</Animated.View>
	)
}

export default Splash

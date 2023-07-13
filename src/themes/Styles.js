import { StyleSheet } from 'react-native'
import {Colors, Dimens} from '../themes'

const Styles = StyleSheet.create({
	containerCenter: {
		flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: Colors.bgColor
	},
	textSplash: {
		fontSize: 32,
		fontWeight: 'bold'
	}
})

export default Styles
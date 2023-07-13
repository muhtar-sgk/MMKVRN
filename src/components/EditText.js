import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../themes'

const EditText = ({placeholder, keyboardType, value, onChangeText, width}) => {
  return (
    <View style={[styles.container, {width: width}]}>
      <TextInput 
        style={styles.input}
        value={value}
				onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
				placeholderTextColor={Colors.step3}
        autoCapitalize= 'none'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 4,
    height: 45,
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },
  input: {
		color: Colors.bgColor
  },
  iconEye: {
    width: 24,
    height: 24,
    alignSelf: 'center'
  }
})

export default EditText
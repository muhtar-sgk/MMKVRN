import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors, Images } from '../themes'

const EditTextPassword = ({placeholder, secureTextEntry, onShowHide, value, onChangeText, width}) => {
  return (
    <View style={[styles.container, {width: width}]}>
      <TextInput 
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
				placeholderTextColor={Colors.step3}
        value={value}
				onChangeText={onChangeText}
      />
      <TouchableOpacity 
        onPress={onShowHide}
        style={{alignSelf: 'center'}}>
        <Image 
          style={styles.iconEye}
          source={secureTextEntry ? Images.icHide : Images.icShow}
        />
      </TouchableOpacity>
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
    width: '70%',
    maxWidth: '70%',
		color: Colors.bgColor
  },
  iconEye: {
    width: 24,
    height: 24,
    alignSelf: 'center'
  }
})

export default EditTextPassword
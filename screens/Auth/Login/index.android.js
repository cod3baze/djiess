import React, { useRef } from 'react'
import {
  View, Text, StyleSheet,
  TouchableOpacity, TextInput,
  KeyboardAvoidingView, Image
} from 'react-native'

import Colors from '../../../constants/Colors'

function Login({ navigation }) {
  const keyboardRef = useRef()

  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled={true} >
        <View>
          <Image style={styles.logo} source={{uri:'../../../assets/images/djiess.png'}} />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput 
            style={styles.input}
            multiline={false}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            clearButtonMode="while-editing"
            placeholder="Enter your email address here"
            keyboardAppearance="dark"
            autoCompleteType= "email"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input}
            multiline={false}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            autoCompleteType="password"
            clearButtonMode="while-editing"
            placeholder="Enter your email address here"
            keyboardAppearance="dark"
            returnKeyType="done"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Enter</Text>
          </TouchableOpacity>
        </View> 
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },

  label: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.COLOR
  },

  input: {
    height: 44,
    margin: 8,
    fontSize: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#555",
    color: '#fff',
  },

  button: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    height: 40,
    width: `80%`,
    marginTop: 40,
  },

  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  }
})


export default Login

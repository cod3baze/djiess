import React, { useRef, useState } from 'react'
import {
  View, Text, StyleSheet,
  TouchableOpacity, TextInput, Easing,
  KeyboardAvoidingView, Animated, Alert
} from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

import Colors from '../../../constants/Colors'

function SignUp({ navigation }) {
  const [email, setEmail] = useState(null)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState(null)
  const [fadeAnim] = useState(new Animated.Value(0))
  const [showPassword , setShowPassword] = useState(true)
  const keyboardRef = useRef()

  function anime(){
    Animated.timing(
      fadeAnim, 
      {
        toValue: 1,
        duration: 500,
        easing: Easing.bounce,
      }).start()
  }

  function handleSecureText(){
    if(showPassword){
      keyboardRef.current.setNativeProps({
        secureTextEntry: false,
      })
      setShowPassword(false)
    }else {
      keyboardRef.current.setNativeProps({
        secureTextEntry: true,
      })
      setShowPassword(true)
    }
  }
  function handleSecuretName() {
    return (
      showPassword ? 'lock' : 'lock-open'
    )
  }

  function handleSubmit() {
    if(!email || !password || !name){
      Alert.alert('Blank space', 'Fill in your information')
      anime()
    }else {
      navigation.navigate('SignUp', {
        User: email,
      })
    }
  }
  function handlePrevious() {
    navigation.navigate('Login', {
      ok: false,
    })
  }

  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled={true} >
        <View style={[styles.view]}>
          <TouchableOpacity onPress={handlePrevious}>
            <MaterialIcons name="clear" size={30} color={Colors.BGWASH} />
          </TouchableOpacity>
        </View>
        <View style={[styles.vw]}>
          <Text style={[styles.instuct]}>Get started Entering your information to register!</Text>
        </View>
        <View style={styles.form}>
          <Animated.Text style={[styles.invalid, { opacity: fadeAnim }]}>invalid Information!</Animated.Text>
          <TextInput 
            value={name}
            onChangeText={setName}
            style={[styles.input, {marginTop: 10, borderBottomColor: Colors.BGWASH, borderBottomWidth: .2,}]}
            placeholderTextColor={Colors.BGWASH}
            multiline={false}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            clearButtonMode="while-editing"
            placeholder="Username *"
            keyboardAppearance="dark"
          />
          <TextInput 
            value={email}
            onChangeText={setEmail}
            style={[styles.input, {marginTop: 10, borderBottomColor: Colors.BGWASH, borderBottomWidth: .2,}]}
            placeholderTextColor={Colors.BGWASH}
            multiline={false}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            clearButtonMode="while-editing"
            placeholder="E-mail *"
            keyboardAppearance="dark"
          />
          <TextInput 
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor={Colors.DISBLE_WASHX}
            ref={keyboardRef}
            multiline={false}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={false}
            clearButtonMode="never"
            placeholder="Password *"
            keyboardAppearance="dark"
            returnKeyType="done"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.btnShow} 
            onPress={handleSecureText}
          >
            <MaterialIcons name={handleSecuretName()} size={25} color={showPassword ? Colors.LINK_COLOR : Colors.MENU} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} 
            onPress={handleSubmit}
          >
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View> 
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
    paddingTop: 30,
    margin: 0,
    padding: 0,
  },

  view: {
    backgroundColor: Colors.BACK_ND,
    padding: 8,
    marginBottom: 10,
  },

  vw: {
    justifyContent: 'center',
    paddingBottom: 10,
  },

  instuct: {
    color: Colors.BGWASH,
    padding: 10,
  },

  form: {
    alignSelf: 'stretch',
    backgroundColor: Colors.BACK_ND,
    paddingHorizontal: 20,
  },

  invalid: {
    color: Colors.WARN,
    alignSelf: 'center',
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    color: Colors.COLOR
  },

  input: {
    height: 44,
    margin: 5,
    fontSize: 18,
    paddingHorizontal: 5,
    borderRadius: 4,
    color: '#fff',
  },

  btnShow: {
    position: 'absolute',
    bottom: 18,
    right: 30,
  },

  buttonContainer: {
    backgroundColor: Colors.BACK_ND,
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    height: 40,
    width: `80%`,
  },

  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  }
})


export default SignUp

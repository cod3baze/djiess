import * as React from 'react'
import {
  View, Text, StyleSheet,
  SafeAreaView, TouchableOpacity, ScrollView
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Colors from '../../constants/Colors'


function Home({ navigation }) {
  function navigateToTerms() {
    navigation.navigate('Terms', {
      name: '',
    })
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.buttonMenu}>
              <MaterialIcons name="brightness-low" size={20} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.logo}>ELIAS</Text>

          <TouchableOpacity style={styles.buttonMenu}>
              <MaterialIcons name="show-chart" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      <ScrollView></ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },

  menu: {
    backgroundColor: Colors.BACK_A,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 55,
    zIndex: 5,
  },

  buttonMenu: {
    color: Colors.COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderWidth: 0,
    height: 50,
    margin: 0,
    padding: 0,
  },

  logo: {
    color: Colors.LINK_COLOR,
    fontSize: 22,
    fontWeight: 'bold',
  },
})



export default Home

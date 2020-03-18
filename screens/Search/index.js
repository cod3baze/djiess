import * as React from 'react'
import {
  View, Text, StyleSheet,
  SafeAreaView, TouchableOpacity, ScrollView,
  Animated, TextInput
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Colors from '../../constants/Colors'


function Search({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <MaterialIcons name="search" size={23} color={Colors.DISBLE_WASH} style={styles.item} />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="username"
          placeholder="Search"
          placeholderTextColor={Colors.DISBLE_WASH}
          autoFocus={true}
          clearButtonMode="while-editing"
          enablesReturnKeyAutomatically={false}
          keyboardAppearance="dark"
          keyboardType="default"
          returnKeyType="done"
        />
      </View>
      <View>
        <ScrollView style={styles.tags} horizontal={true} showsHorizontalScrollIndicator={false} >
          <View style={styles.tag}>
            <Text style={styles.tg}>Technology</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tg}>Health</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tg}>Companies</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tg}>Biology</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tg}>Automobiles</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tg}>Games</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tg}>Food</Text>
          </View>
          
        </ScrollView>
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
    backgroundColor: Colors.DISBLE_WASHS,
    flexDirection: 'row',
    paddingHorizontal: 2,
    height: 55,
    zIndex: 5,
    borderBottomWidth: .2,
    borderBottomColor: Colors.DISBLE_WASHX,
    paddingLeft: 5,
  },

  item: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 6,
  },

  input: {
    height: 40,
    backgroundColor: Colors.GREY_PTN,
    borderRadius: 5,
    width: `90%`,
    margin: 5,
    paddingHorizontal: 5,
    paddingLeft: 37,
    fontSize: 18,
    zIndex: 5,
    color: Colors.COLOR,
  },

  tags: {
    height: 50,
    backgroundColor: Colors.DISBLE_WASHS,
    paddingLeft: 5,
  },
  tag: {
    height: 35,
    borderRadius: 10,
    backgroundColor: Colors.GREY_PTN,
    marginLeft: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  tg: {
    color: Colors.DISBLE_WASHX,
  },
})



export default Search

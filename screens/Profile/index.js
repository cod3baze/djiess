import * as React from 'react'
import {
  View, Text, StyleSheet,
  Image, ScrollView
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from '../../constants/Colors'

function Profile({}) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Image style={styles.photo} source={{uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400'}} />
          <View style={styles.div}>
            <Text>Follow: 23434</Text>
            <Text>Following: 98</Text>
            <Text>Featured: 30</Text>
            <Text>Total: 75</Text>
          </View>
        </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },

  header: {
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND_CLR,
    paddingTop: 10,
    height: 250,
  },

  photo: {
    height: 70,
    width: 70,
    borderRadius: 8,
  },

  div: {},

  content: {
    marginTop: 0,
    paddingBottom: 3,
  },
})



export default Profile

import * as React from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity, 
  ScrollView, ActivityIndicator
} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from '../../constants/Colors'

const data = [
  {
    id: "1",
    name: "@Elias",
    desc: "Lorem ipsum dolor, sit amet consectetur elit",
    seguindo: false,
  },
  {
    id: "2",
    name: "@Xandhi",
    desc: "doloremque, facilis ",
    seguindo: false,
  },
  {
    id: "3",
    name: "@Barraba",
    desc: "Lorem ipsum dolor, sit adipisicing elit",
    seguindo: false,
  },
  {
    id: "4",
    name: "@Castro",
    desc: " atque esse quisquam.",
    seguindo: false,
  },
  {
    id: "5",
    name: "@Raael",
    desc: "nostrum veniam Temporibus magni",
    seguindo: false,
  },
  {
    id: "6",
    name: "@Elias Alex",
    desc: "Quae enim possimus odit similique dolores nulla a,",
    seguindo: false,
  },
  {
    id: "7",
    name: "@Pablo",
    desc: "quibusdam delectus rem quam cupiditate. ",
    seguindo: false,
  },
  {
    id: "8",
    name: "@Gus",
    desc: "Meridium delectus rem quam cupiditate. ",
    seguindo: true,
  }
]


function Activity({}) {
  const [load, setLoad] = React.useState(false)

  React.useEffect(() => {
    function setter(){
      setLoad(true)
    }

    setTimeout(setter, 2000)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.logo}>ACTIVITY</Text>
      </View>
      {load ?
        <ScrollView contentContainerStyle={styles.content}>
          {
            data.map(item => (
              <TouchableOpacity key={item.id} style={styles.body}>
                <View style={styles.div}>
                  <Text style={styles.bodyName}>{item.name}</Text>
                  <Text style={styles.bodyDesc}>{item.desc}</Text>
                </View>
                { item.seguindo ? 
                    <TouchableOpacity style={styles.btnD}>
                      <Text style={styles.seguir}>Following</Text>
                    </TouchableOpacity>
                  :
                    <TouchableOpacity style={styles.btn}>
                      <Text style={styles.seguindo}>Follow</Text>
                    </TouchableOpacity>
                }
              </TouchableOpacity>
            ))
          }
        </ScrollView>
        : <View style={styles.loading}><ActivityIndicator size="large" color={Colors.COLOR} /></View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG_COLOR,
  },

  loading: {
    marginTop: 150,
  },

  menu: {
    backgroundColor: Colors.BACK_A,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 55,
    zIndex: 5,
  },

  logo: {
    color: Colors.LINK_COLOR,
    fontSize: 22,
    fontWeight: 'bold',
  },

  content: {
    marginTop: 1,
    paddingBottom: 3,
  },

  body: {
    padding: 10,
    marginBottom: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  div: {
    maxWidth: `70%`,
    minWidth: `70%`,
  },

  bodyName: {
    color: Colors.BGWASH,
    fontSize: 18,
    paddingBottom: 2,
  },
  bodyDesc: {
    color: Colors.DISBLE_WASH,
    fontSize: 16,
  },

  btn: {
    maxWidth: `29%`,
    minWidth: `29%`,
    backgroundColor: Colors.BG_INITIAL,
    height: 30,
    width: 80,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnD: {
    maxWidth: `29%`,
    minWidth: `29%`,
    backgroundColor: Colors.DISBLE_WASHY,
    height: 30,
    width: 80,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seguindo: {
    color: Colors.LINK_COLOR,
  },
  seguir: {
    color: Colors.DISBLE_WASHX,
  },
})


export default Activity

import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet,
  SafeAreaView, TouchableOpacity, FlatList,
  Animated, TextInput, Image, ScrollView
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import _ from 'lodash'
import api from '../../services/jsonplaceholder'

import Colors from '../../constants/Colors'


function Search({ navigation }) {
  const [data, setData] = useState([
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
  ])
  const [fullData, setFullData] = useState(data)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // async function call() {
    //   await requestAPIPhotos()
    // }

    // call()
  }, [])

  // async function requestAPIPhotos() {
  //   setLoading(true)

  //   try {
  //     const datas = await api.get()
    
  //     setData(datas)
  //     setFullData(datas)
  //     setLoading(false)

  //   } catch (err) {
  //     setError(err)
  //     setLoading(false)
  //   }

  // }

  function handleSearch(text) {
    const formattedQuery = text.toLowerCase()
    const dt = _.filter(fullData, query => {
      if(query.title.includes(formattedQuery)) {
        return true
      }
      return false
    })

    setData(dt)
    setQuery(text)
  }

  const _renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.thumb} source={{ uri: item.thumbnailUrl }} />
      <View style={styles.body}>
        <Text style={styles.title}>{ item.title }</Text>
        <Text style={styles.url}>{ item.url }</Text>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <MaterialIcons name="search" size={23} color={Colors.DISBLE_WASH} style={styles.itemI} />
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
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
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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

  itemI: {
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

  item: {
    flexDirection: 'row',
    backgroundColor: Colors.BG_INITIAL,
    padding: 3,
  },

  thumb: {
    borderRadius: 10,
    height: 60,
    width: 60
  },

  body: {
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 7,
  },

  title: {
    fontSize: 18,
    color: '#FFF',
  },

  url: {
    fontSize: 14,
    color: '#D3D3D3',
  },
})



export default Search

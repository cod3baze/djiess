import * as React from 'react'
import { 
  MaterialIcons, Entypo,
  Feather, MaterialCommunityIcons
} from '@expo/vector-icons'

import Colors from '../../constants/Colors'

function TabBarIcon({ name, focused, type }) {
  if(type === 'ft') {
    return (
      <Feather
        name={name}
        size={28}
        color={focused ? Colors.focusedTabBarIcon : Colors.defaultTabBarIcon}
        style={{ marginBottom: focused? 0 : -3 }}
      />
    )
  }
  if(type === "mtc") {
    return (
      <MaterialCommunityIcons 
        name={name}
        size={28}
        color={focused ? Colors.focusedTabBarIcon : Colors.defaultTabBarIcon}
        style={{ marginBottom: focused? 0 : -3 }}
      />
    )
  }
  if(type === "enp") {
    return (
      <Entypo 
        name={name} 
        size={28}
        color={focused ? Colors.focusedTabBarIcon : Colors.defaultTabBarIcon}
        style={{ marginBottom: focused? 0 : -3 }}
      />
    )
  }
  return (
    <MaterialIcons 
      name={name} 
      size={28}
      color={focused ? Colors.focusedTabBarIcon : Colors.defaultTabBarIcon}
      style={{ marginBottom: focused? 0 : -3 }}
    />
  )
}


export default TabBarIcon

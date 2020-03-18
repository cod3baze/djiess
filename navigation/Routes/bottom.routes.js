import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../../screens/Home'
import Search from '../../screens/Search'
import Activity from '../../screens/Activity'
import Profile from '../../screens/Profile'

const Bottom = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = "Home"
const BACKGROUND = "rgba(255, 255, 255, .5)"

function BottomRoutes() {
  return (
    <Bottom.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: BACKGROUND,
      }}
    >
      <Bottom.Screen 
        name="Home"  
        component={Home} 
        options={{
          tabBarLabel: 'ELIAS'
        }}
      />
      <Bottom.Screen name="Search" component={Search} />
      <Bottom.Screen name="Activity" component={Activity} />
      <Bottom.Screen name="Profile" component={Profile} />
    </Bottom.Navigator>
  )
}

export default BottomRoutes

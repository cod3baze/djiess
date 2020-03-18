import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Terms from '../../screens/Terms'
import Home from '../../screens/Home'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  )
}
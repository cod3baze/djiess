import * as React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBarIcon from '../components/TabBarIcons'
// import { Entypo } from '@expo/vector-icons'

import Colors from '../constants/Colors'

import StackRoutes from './Routes/stack.routes'

import Login from '../screens/Auth/Login'
import SignUp from '../screens/Auth/SignUp'

import Search from '../screens/Search'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'

const BACKGROUND = "rgba(255, 255, 255, .5)"
const Tabs = createBottomTabNavigator()

function AppRoutes() {
  return (
    <Tabs.Navigator 
      initialRouteName="AuthRoutes"
      tabBarOptions={{
        showLabel: false,
        style:{
          backgroundColor: "#33333D",
          borderWidth: 0,
          borderTopWidth: 0,
        }
      }}
    >
      <Tabs.Screen 
        name="StackRoutes" 
        component={StackRoutes} 
        options={{
          tabBarIcon: ({ focused, name="home-outline", type="mtc" }) => (
            <TabBarIcon type={type} name={name} focused={focused} />
          )
        }} 
      />
      <Tabs.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarIcon: ({ focused, name="search", type="mt" }) => (
            <TabBarIcon type={type} name={name} focused={focused} />
          )
        }}
      />
      <Tabs.Screen 
        name="Activity" 
        component={Activity}
        options={{
          tabBarIcon: ({ focused, name="notifications-none" }) => (
            <TabBarIcon name={name} focused={focused} />
          )
        }}
      />
      <Tabs.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused, name="user", type="ft" }) => (
            <TabBarIcon type={type} name={name} focused={focused} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

const Routes = createSwitchNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  AppRoutes: {
    screen : AppRoutes,
  }
}, {
  initialRouteName: "Login",
}) 



export default createAppContainer(Routes)
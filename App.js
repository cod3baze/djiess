import React from 'react';
import { StatusBar } from 'react-native'
import Routes from './navigation/routes'
import { NavigationContainer } from '@react-navigation/native'

function App() {

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Routes /> 
    </NavigationContainer>
  );
} 


export default App

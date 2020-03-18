import * as React from 'react';
import { 
  StyleSheet, StatusBar, View,
  Platform
} from 'react-native';
import { SplashScreen } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './navigation'

const Stack = createStackNavigator()

function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const containerRef = React.useRef()

  // carrega qualquer dado que precisamos priorizar para renderizar o App
  React.useEffect(() => {
    async function loadResourceAndDataAsync() {
      try {
        SplashScreen.preventAutoHide()

        // carrega fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/Fonts/SpaceMono-Regular.ttf'),
        })
      } catch(e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    loadResourceAndDataAsync()
  }, [])

  if(!isLoadingComplete && !props.skipLoadScreen) {
    return null
  }else {
    return (
      <View style={styles.container}>
        <NavigationContainer ref={containerRef} initialState={}>
          <Stack.Navigator>
            <Stack.Screen name="root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default App

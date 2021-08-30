import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import RootNavigator from './navigation/navigation'
import NotFoundScreen from './screens/not-found/not-found.screen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#0A81AB" barStyle="light-content" />
      <NavigationContainer>
        {/* <NotFoundScreen /> */}
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

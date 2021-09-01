import React from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {ThemeProvider} from 'styled-components/'
import RootNavigator from './navigation/navigation'
import theme from './theme/light'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#0A81AB" barStyle="light-content" />
        <NavigationContainer>
          <RootNavigator />
          {/* <FlashMessage position="top" /> */}
        </NavigationContainer>
      </SafeAreaView>
    </ThemeProvider>
  )
}

export default App

import React, {useContext, useState} from 'react'
import {StatusBar, SafeAreaView, useColorScheme} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {ThemeContext, ThemeProvider} from 'styled-components/'
import RootNavigator from './navigation/navigation'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import {DarkModeContext} from './hooks/useDarkMode'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    useColorScheme() === 'dark' ? true : false,
  )

  return (
    <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            backgroundColor={
              isDarkMode ? darkTheme.colors.primary : lightTheme.colors.primary
            }
            barStyle="light-content"
          />
          <NavigationContainer>
            <RootNavigator />
            {/* <FlashMessage position="top" /> */}
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

export default App

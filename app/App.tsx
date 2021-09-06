import React, {useState} from 'react'
import {StatusBar, SafeAreaView, useColorScheme, Appearance} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {ThemeProvider} from 'styled-components/'
import RootNavigator from './navigation/navigation'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import {DarkModeContext} from './hooks/useDarkMode'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const colorScheme = useColorScheme()
  const [isDarkMode, setIsDarkMode] = useState(false)

  React.useEffect(() => {
    SplashScreen.hide()
    // getToken();
  })

  return (
    <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            backgroundColor={
              colorScheme === 'dark'
                ? darkTheme.colors.primary
                : lightTheme.colors.primary
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

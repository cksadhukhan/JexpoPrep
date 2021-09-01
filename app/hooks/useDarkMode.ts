import {createContext, useContext} from 'react'

export interface DarkMode {
  isDarkMode: boolean
  setIsDarkMode: any
}

export const DarkModeContext = createContext<DarkMode | undefined>(undefined)

function useDarkMode() {
  const darkModeContext = useContext(DarkModeContext)
  if (!darkModeContext) {
    throw new Error(
      'useDarkMode must be used within the DarkModeContext.Provider',
    )
  }

  return darkModeContext
}

export default useDarkMode

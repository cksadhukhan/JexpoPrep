import {createContext, useContext} from 'react'

export interface DarkMode {
  isDarkMode: boolean
  setIsDarkMode: any
}

export const DarkModeContext = createContext<DarkMode | undefined>(undefined)

function useDarkMode() {
  const postsContext = useContext(DarkModeContext)
  if (!postsContext) {
    throw new Error(
      'useDarkMode must be used within the DarkModeContext.Provider',
    )
  }
  return postsContext
}

export default useDarkMode

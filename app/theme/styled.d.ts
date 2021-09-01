import 'styled-components'
import {Theme} from './theme'

/**
 * Adds typings to the styled components DefaultTheme which is defined as Theme. This interface is used to check
 * theme passed to ThemeProvider on app.tsx
 */
declare module 'styled-components' {
  // tslint:disable-next-line:no-empty-interface
  export interface DefaultTheme extends Theme {}
}

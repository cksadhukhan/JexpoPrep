import * as styledComponents from 'styled-components/native'
import {Theme} from './theme'

const {default: styled, css, ThemeProvider} = styledComponents

export interface IStyledTheme {
  theme: Theme
}

export {css, ThemeProvider}
export default styled

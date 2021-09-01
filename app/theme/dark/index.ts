import {DefaultTheme} from 'styled-components'
import {images} from '../images'
import {palette} from '../palette'

/**
 * This file should not reference the color names directly. In order to support
 * dynamic themes, use names such as textDark instead of grayDark which stays in
 * context even though the theme is changed. Use color names for colors that are
 * independent of theme.
 */
const darkTheme: DefaultTheme = {
  colors: {
    black: palette.black,
    white: palette.white,
    offWhite: palette.offWhite,
    primary: palette.black,
    secondary: palette.green,
    background: palette.onyx,
    success: palette.green,
    error: palette.red,
    text: palette.black,
    textLight: palette.whiteSmoke,
    textLighter: palette.grayLight,
    link: palette.blue,
    grayDark: palette.greyDark,
    grayLight: palette.grayLight,
    grayLighter: palette.grayLighter,
    transparent: palette.transparent,
    modalBackdrop: palette.grayTransparent,
    backgroundDark: palette.grayLightest,
    lightOrange: palette.lightOrange,
    lightBlue: palette.lightBlue,
    lighterBlue: palette.lighterBlue,
    skyBlue: palette.skyBlue,
    haveLockBlue: palette.haveLockBlue,
    softGreen: palette.softGreen,
    skyMagenta: palette.skyMagenta,
    lightCarminePink: palette.lightCarminePink,
    tuftsBlue: palette.tuftsBlue,
    brownSugar: palette.brownSugar,
    brightLavender: palette.brightLavender,
    pipe: palette.white,
    headingText: palette.white,
  },
  images,
}

export default darkTheme

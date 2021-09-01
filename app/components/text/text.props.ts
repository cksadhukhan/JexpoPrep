import React from 'react'
import {TextProps as TextProperties, TextStyle} from 'react-native'
import {ColorTypes} from '../../theme/index'

export enum TextPresets {
  /**
   * A black medium sized bold header text
   */
  CONTENT_HEADER = 'contentHeader',

  /**
   * A black medium sized text
   */
  CONTENT = 'content',

  /**
   * Common medium sized description text
   */
  DESCRIPTION = 'description',

  /**
   * Large sized dark text
   */
  TITLE = 'title',

  /**
   * Used to show small light colored info messages
   */
  MESSAGE = 'message',

  /**
   * Renders a small gray text
   */
  SMALL = 'small',
}

export const FontSizes = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 24,
  xLarge: 30,
  xxLarge: 36,
  huge: 64,
}

type Size = keyof typeof FontSizes

export interface TextProps extends TextProperties {
  /**
   * Adds text to the end of the current text
   */
  append?: TextProps

  /**
   * Bolder text
   */
  bold?: boolean

  /**
   * Less bolder text
   */
  bold500?: boolean

  /**
   * Less bolder text
   */
  bold200?: boolean

  /**
   * Sets font weight to normal
   */
  noBold?: boolean

  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * Text color.
   */
  color?: ColorTypes

  /**
   * Center align text
   */
  center?: boolean

  /**
   * Grays out the text to make it look disabled and restricts onPress operation
   */
  disabled?: boolean

  /**
   * Line height.
   */
  lineHeight?: number

  /**
   * Text which is looked up via i18n.
   */
  tx?: string

  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: object

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[]

  /**
   * When a text is displayed in a row next to an item, this prop
   * can be used to add some space before text
   */
  paddingLeft?: number

  /**
   * Adds text to the beginning of the current text
   */
  prepend?: TextProps

  /**
   * While appending or prepending a text, a spacing is automatically added.
   * If noSpace prop is true, then the space will not be added.
   */
  noSpace?: boolean

  /**
   * One of the different types of text presets.
   */
  preset?: TextPresets

  /**
   * Font size from the predefined set of sizes or an arbitrary number
   */
  size?: Size | number

  /**
   * Transform text to UPPER CASE
   */
  upperCase?: boolean

  /**
   * Transform text to lower case
   */
  lowerCase?: boolean

  /**
   *
   */
  fontMontserrat?: boolean

  /**
   *
   */
  montserratSemiBold?: boolean

  /**
   *
   */
  fontBebasNeue?: boolean

  /**
   *
   */
  fontLightMontserrat?: boolean
}

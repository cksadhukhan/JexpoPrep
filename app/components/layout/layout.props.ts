import * as React from 'react'
import {ViewProps, ViewStyle} from 'react-native'
import {SpacingTypes} from '../../theme/index'

export interface LayoutProps extends ViewProps {
  /**
   * Border radius facilitates curved borders
   */
  borderRadius?: number

  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * Background color for the row. Useful in dev environment.
   */
  color?: string

  /**
   * Horizontally center align child components
   */
  hCenter?: boolean

  /**
   * Bottom align child components
   */
  bottom?: boolean

  /**
   * Vertically center align child components
   */
  vCenter?: boolean

  /**
   * Height of the container
   */
  height?: number | string

  /**
   * Width of the container
   */
  width?: number | string

  /**
   * Maximum height of the container
   */
  maxHeight?: number | string

  /**
   * Maximum width of the container
   */
  maxWidth?: number | string

  /**
   * Flex size
   */
  size?: number

  /**
   * Flex wrap
   */
  wrap?: boolean

  /**
   * Hides the view when set to true
   */
  hidden?: boolean

  /**
   * Component margin top
   */
  marginTop?: SpacingTypes

  /**
   * Component margin bottom
   */
  marginBottom?: SpacingTypes

  /**
   * Component margin left
   */
  marginLeft?: SpacingTypes

  /**
   * Component margin right
   */
  marginRight?: SpacingTypes

  /**
   * Component padding top
   */
  paddingTop?: SpacingTypes

  /**
   * Component padding bottom
   */
  paddingBottom?: SpacingTypes

  /**
   * Component padding left
   */
  paddingLeft?: SpacingTypes

  /**
   * Component padding right
   */
  paddingRight?: SpacingTypes

  /**
   * Component vertical padding
   */
  paddingVertical?: SpacingTypes

  /**
   * Component horizontal padding
   */
  paddingHorizontal?: SpacingTypes

  /**
   * Component vertical margin
   */
  marginVertical?: SpacingTypes

  /**
   * Component horizontal margin
   */
  marginHorizontal?: SpacingTypes

  /**
   * Component padding
   */
  padding?: SpacingTypes

  /**
   * Component margin
   */
  margin?: SpacingTypes

  /**
   * Aligns content to right
   */
  rightAlign?: boolean

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

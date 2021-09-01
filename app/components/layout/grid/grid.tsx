import * as React from 'react'
import {StyleSheet, TextStyle, View} from 'react-native'
import {styles} from './grid.styles'
import {GridProps} from './grid.props'
import {spacing} from '../../../theme/index'

/**
 * Grid component occupies 100% of the available space
 */
export function Grid(props: GridProps) {
  const {
    borderRadius,
    bottom,
    children,
    color,
    hCenter,
    vCenter,
    hidden,
    height,
    width,
    maxHeight,
    maxWidth,
    marginTop,
    marginBottom,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    padding,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    margin,
    rightAlign,
    style: styleOverride,
    ...rest
  } = props
  const style: TextStyle = StyleSheet.flatten([
    borderRadius ? {borderRadius} : {},
    bottom ? {justifyContent: 'flex-end'} : {},
    color ? {backgroundColor: color} : {},
    hCenter ? styles.hCenter : {},
    vCenter ? styles.vCenter : {},
    height ? {height} : {},
    width ? {width} : {},
    maxHeight ? {maxHeight} : {},
    maxWidth ? {maxWidth} : {},
    marginTop ? {marginTop: spacing[marginTop] || 0} : {},
    marginBottom ? {marginBottom: spacing[marginBottom] || 0} : {},
    marginLeft ? {marginLeft: spacing[marginLeft] || 0} : {},
    marginRight ? {marginRight: spacing[marginRight] || 0} : {},
    paddingTop ? {paddingTop: spacing[paddingTop] || 0} : {},
    paddingBottom ? {paddingBottom: spacing[paddingBottom] || 0} : {},
    paddingLeft ? {paddingLeft: spacing[paddingLeft] || 0} : {},
    paddingRight ? {paddingRight: spacing[paddingRight] || 0} : {},
    paddingVertical ? {paddingVertical: spacing[paddingVertical] || 0} : {},
    paddingHorizontal
      ? {paddingHorizontal: spacing[paddingHorizontal] || 0}
      : {},
    marginVertical ? {marginVertical: spacing[marginVertical] || 0} : {},
    marginHorizontal ? {marginHorizontal: spacing[marginHorizontal] || 0} : {},
    padding ? {padding: spacing[padding] || 0} : {},
    margin ? {margin: spacing[margin] || 0} : {},
    rightAlign ? styles.rightAlign : {},
    styles.wrapper,
    styleOverride,
  ])

  if (hidden) {
    return <View />
  }

  return (
    <View style={style} {...rest}>
      {children}
    </View>
  )
}

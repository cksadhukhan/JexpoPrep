import * as React from 'react'
import {StyleSheet, TextStyle, View} from 'react-native'
import {rowStyles as styles} from './row.styles'
import {RowProps} from './row.props'
import {spacing} from '../../../theme/index'

/**
 * Row component places UI elements horizontally
 */
export function Row(props: RowProps) {
  const {
    borderRadius,
    bottom,
    children,
    color,
    height,
    width,
    maxHeight,
    maxWidth,
    size,
    hCenter,
    vCenter,
    hidden,
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
    wrap,
    rightAlign,
    spaceBetween,
    style: styleOverride,
    ...rest
  } = props
  const style: TextStyle = StyleSheet.flatten([
    borderRadius ? {borderRadius} : {},
    bottom ? {alignItems: 'flex-end'} : {},
    color ? {backgroundColor: color} : {},
    hCenter ? styles.hCenter : {},
    vCenter ? styles.vCenter : {},
    height ? {height} : {},
    width ? {width} : {},
    maxHeight ? {maxHeight} : {},
    maxWidth ? {maxWidth} : {},
    size ? {flex: size} : {},
    wrap ? styles.wrap : {},
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
    spaceBetween ? styles.spaceBetween : {},
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

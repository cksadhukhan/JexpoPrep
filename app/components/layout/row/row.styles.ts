import {StyleSheet, ViewStyle} from 'react-native'

interface IStyles {
  wrapper: ViewStyle
  vCenter: ViewStyle
  hCenter: ViewStyle
  wrap: ViewStyle
  rightAlign: ViewStyle
  spaceBetween: ViewStyle
}

export const rowStyles = StyleSheet.create<IStyles>({
  wrapper: {
    flexDirection: 'row',
  },
  vCenter: {
    alignItems: 'center',
  },
  hCenter: {
    justifyContent: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  rightAlign: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
})

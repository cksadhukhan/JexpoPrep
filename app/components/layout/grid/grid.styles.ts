import {StyleSheet, ViewStyle} from 'react-native'

interface IStyles {
  wrapper: ViewStyle
  vCenter: ViewStyle
  hCenter: ViewStyle
  rightAlign: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  wrapper: {
    flex: 1,
  },
  vCenter: {
    justifyContent: 'center',
  },
  hCenter: {
    alignItems: 'center',
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
})

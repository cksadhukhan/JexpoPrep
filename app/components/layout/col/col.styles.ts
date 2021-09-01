import {StyleSheet, ViewStyle} from 'react-native'

interface IStyles {
  wrapper: ViewStyle
  vCenter: ViewStyle
  hCenter: ViewStyle
  wrap: ViewStyle
  rightAlign: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  wrapper: {
    flexDirection: 'column',
  },
  vCenter: {
    justifyContent: 'center',
  },
  hCenter: {
    alignItems: 'center',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
})

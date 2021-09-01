import {ColorTypes} from '../../theme'
import {IconProps} from '../icon/icon.props'
import {TextProps} from '../text/text.props'

export interface BoxComponentProps {
  color?: ColorTypes

  label: TextProps

  icon: IconProps

  onPress?: () => void
}

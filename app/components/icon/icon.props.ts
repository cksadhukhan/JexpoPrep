import {TextStyle} from 'react-native'
import {IconProps as RNVIIconProps} from 'react-native-vector-icons/Icon'
import {ColorTypes} from '../../theme/index'

export type IconFamily =
  | 'antDesignIcon'
  | 'entypoIcon'
  | 'evilIcon'
  | 'featherIcon'
  | 'fontAwesome'
  | 'fontistoIcon'
  | 'foundationIcon'
  | 'ionIcon'
  | 'materialCommunityIcon'
  | 'materialIcon'
  | 'octIcon'
  | 'simpleLineIcon'
  | 'zocialIcon'

export interface IconProps extends RNVIIconProps {
  /**
   * Enforcing colors from app theme
   */
  color?: ColorTypes

  /**
   * Icon family
   */
  family?: IconFamily

  /**
   * An optional style override useful for padding & margin.
   */
  style?: TextStyle | TextStyle[]
}

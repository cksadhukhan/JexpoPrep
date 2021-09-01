import * as React from 'react'
import {StyleSheet, TextStyle} from 'react-native'
import {DefaultTheme, withTheme} from 'styled-components/native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Octicon from 'react-native-vector-icons/Octicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import ZocialIcon from 'react-native-vector-icons/Zocial'
import {IconFamily, IconProps} from './icon.props'

const iconFamilies: {[key in IconFamily]: any} = {
  antDesignIcon: AntDesignIcon,
  entypoIcon: EntypoIcon,
  evilIcon: EvilIcon,
  featherIcon: FeatherIcon,
  fontAwesome: FontAwesome,
  fontistoIcon: FontistoIcon,
  foundationIcon: FoundationIcon,
  ionIcon: Ionicon,
  materialCommunityIcon: MaterialCommunityIcon,
  materialIcon: MaterialIcon,
  octIcon: Octicon,
  simpleLineIcon: SimpleLineIcon,
  zocialIcon: ZocialIcon,
}

/**
 * Display icons from various font families. Default family is FontAwesome
 */
// @ts-ignore
export const Icon: React.FunctionComponent<IconProps> = withTheme(
  (props: IconProps & {theme: DefaultTheme}) => {
    const {
      color,
      family,
      style: styleOverride,
      theme: {colors},
      ...rest
    } = props
    const style: TextStyle = StyleSheet.flatten([
      {color: color ? colors[color] : colors.black},
      styleOverride,
    ])
    const MainIcon = family ? iconFamilies[family] : FontAwesome

    return <MainIcon {...rest} style={style} />
  },
)

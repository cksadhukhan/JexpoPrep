import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import styled, {withTheme} from 'styled-components/native'
import {IStyledTheme} from '../../theme'
import {Icon} from '../icon/icon.component'
import {Col} from '../layout'
import {Text} from '../text/text.component'
import {BoxComponentProps} from './box.component.props'

const TouchableBox = styled.TouchableOpacity<TouchableOpacityProps>`
  flex: 1;
  margin: 5px;
`

export const Box: React.FunctionComponent<BoxComponentProps> = withTheme(
  (props: BoxComponentProps & IStyledTheme) => {
    const {
      color,
      label,
      icon,
      onPress,
      theme: {colors},
    } = props

    const boxColor = color ? colors[color] : colors.primary

    return (
      <TouchableBox onPress={onPress}>
        <Col hCenter vCenter height={100} color={boxColor} borderRadius={15}>
          <Icon color="white" {...icon} />
          <Text color="textLight" size={14} {...label} />
        </Col>
      </TouchableBox>
    )
  },
)

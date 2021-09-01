import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import styled, {withTheme} from 'styled-components/native'
import {IStyledTheme} from '../../theme'
import {Icon} from '../icon/icon.component'
import {Col, Row} from '../layout'
import {Text} from '../text/text.component'
import {TrackComponentProps} from './track.component.props'

const TouchableBox = styled.TouchableOpacity<TouchableOpacityProps>``

export const Track: React.FunctionComponent<TrackComponentProps> = withTheme(
  (props: TrackComponentProps & IStyledTheme) => {
    const {
      theme: {colors},
      ...rest
    } = props

    return (
      <TouchableBox {...rest}>
        <Row
          hCenter
          vCenter
          margin="medium"
          paddingHorizontal="medium"
          borderRadius={10}
          color={colors.textLight}
          height={40}>
          <Icon name="graph" family="octIcon" size={16} />
          <Text text="Track Progress" />
        </Row>
      </TouchableBox>
    )
  },
)

{
  /* <TouchableOpacity
            style={{
              height: 40,
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 20,
              margin: 10,
              backgroundColor: '#f5f5f5',
              borderRadius: 15,
            }}>
            <OcticonsIcon  />
            <Text></Text>
          </TouchableOpacity> */
}

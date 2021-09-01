import React from 'react'
import {withTheme} from 'styled-components/native'
import {IStyledTheme} from '../../theme'
import {Col, Row} from '../layout'
import {Text} from '../text/text.component'
import {HeadingComponentProps} from './heading.component.props'

export const Heading: React.FunctionComponent<HeadingComponentProps> =
  withTheme((props: HeadingComponentProps & IStyledTheme) => {
    const {
      label,
      theme: {colors},
    } = props

    return (
      <Row
        vCenter
        marginLeft="medium"
        marginTop="medium"
        paddingVertical="small">
        <Col color={colors.primary} height={20} width={5} />
        <Text
          paddingLeft={5}
          style={{fontSize: 18, fontFamily: 'Roboto-SemiBold'}}
          {...label}
        />
      </Row>
    )
  })

import React, {useContext, useState} from 'react'
import {ScrollView, TouchableOpacity} from 'react-native'
import {ThemeContext} from 'styled-components/native'
import {Col, Grid, Heading, Row, Text} from '../../components'

const Notification = () => {
  const theme = useContext(ThemeContext)

  const [notifications, setNotifications] = useState<Array<any>>([
    {
      title:
        'Notification for submission of marks of qualifying examination by the applicants of JEXPO & VOCLET 2021 (Academic Session 2021-22)',
    },
    {
      title:
        'Notification for submission of marks of qualifying examination by the applicants of JEXPO & VOCLET 2021 (Academic Session 2021-22)',
    },
    {
      title:
        'Notification for submission of marks of qualifying examination by the applicants of JEXPO & VOCLET 2021 (Academic Session 2021-22)',
    },
  ])

  return (
    <Grid color={theme.colors.background}>
      <Heading label={{text: 'Latest Notifications'}} />
      <ScrollView>
        <Col marginHorizontal="medium">
          {notifications?.map((notification, index) => {
            return (
              <Col
                key={index}
                color={theme.colors.notificationBackground}
                padding="small"
                borderRadius={10}
                marginTop={index === 0 ? 'tiny' : 'medium'}>
                <TouchableOpacity key={index}>
                  <Text
                    color="headingText"
                    text={notification.title}
                    size={15}
                  />
                </TouchableOpacity>
              </Col>
            )
          })}
        </Col>
      </ScrollView>
    </Grid>
  )
}

export default Notification

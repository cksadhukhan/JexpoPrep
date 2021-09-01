import React, {useContext} from 'react'
import {ScrollView, Alert} from 'react-native'
import {getGreet} from '../../utils'
import {Box, Col, Grid, Heading, Row, Track, Text} from '../../components'
import {ThemeContext} from 'styled-components/native'

const HomeScreen = () => {
  const greet = getGreet()

  const theme = useContext(ThemeContext)

  return (
    <Grid color={theme.colors.background}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Row
          spaceBetween
          hCenter
          vCenter
          color={theme.colors.primary}
          height={100}
          style={{
            marginTop: -15,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Col style={{paddingLeft: 15, flex: 2}}>
            <Text
              tx="common.greet"
              txOptions={{greet}}
              size={20}
              color="white"
              style={{fontFamily: 'Roboto-SemiBold'}}
            />
            <Text
              tx="common.tagLine"
              size={15}
              color="white"
              style={{
                marginTop: 5,
                color: '#fff',
                fontFamily: 'Roboto-Light',
              }}
            />
          </Col>
          <Track />
        </Row>

        <Heading label={{tx: 'common.subjects'}} />

        <Row spaceBetween padding="tiny">
          <Box
            color="haveLockBlue"
            icon={{
              name: 'calculator-variant',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.math'}}
            onPress={() => Alert.alert('Math')}
          />
          <Box
            color="softGreen"
            icon={{
              name: 'magnet-on',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.phys'}}
            onPress={() => Alert.alert('Phys')}
          />
          <Box
            color="skyMagenta"
            icon={{
              name: 'test-tube',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.chem'}}
            onPress={() => Alert.alert('Chem')}
          />
        </Row>

        <Heading label={{tx: 'common.practiceSet'}} />

        <Row spaceBetween padding="tiny">
          <Box
            color="lightCarminePink"
            icon={{
              name: 'calculator-variant',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.math'}}
            onPress={() => Alert.alert('Math')}
          />
          <Box
            color="tuftsBlue"
            icon={{
              name: 'magnet-on',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.phys'}}
            onPress={() => Alert.alert('Phys')}
          />
          <Box
            color="brownSugar"
            icon={{
              name: 'test-tube',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.chem'}}
            onPress={() => Alert.alert('Chem')}
          />
        </Row>

        <Heading label={{tx: 'common.prevYearQues'}} />

        <Row spaceBetween padding="tiny">
          <Box
            color="haveLockBlue"
            icon={{
              name: 'bookshelf',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.subWise'}}
            onPress={() => Alert.alert('Math')}
          />
          <Box
            color="brightLavender"
            icon={{
              name: 'calendar',
              family: 'materialCommunityIcon',
              size: 24,
            }}
            label={{tx: 'common.yearWise'}}
            onPress={() => Alert.alert('Phys')}
          />
        </Row>
      </ScrollView>
    </Grid>
  )
}

export default HomeScreen

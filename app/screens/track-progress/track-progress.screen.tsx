import React, {useContext} from 'react'
import {Dimensions, View} from 'react-native'
import {LineChart, ProgressChart} from 'react-native-chart-kit'
import {ThemeContext} from 'styled-components/native'
import {Grid, Col, Text} from '../../components'

const ChartByMonth = () => {
  return (
    <Col>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#0A81AB',
          backgroundGradientFrom: '#26bdf2',
          backgroundGradientTo: '#075b78',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </Col>
  )
}

const ChartByMockTest = () => {
  const data = {
    labels: ['Correct', 'Incorrect', 'Skip'], // optional
    data: [0.65, 0.25, 0.1],
  }

  return (
    <Col marginTop="small">
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width - 20}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: '#0A81AB',
          backgroundGradientFrom: '#26bdf2',
          backgroundGradientTo: '#075b78',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        hideLegend={false}
      />
    </Col>
  )
}

const TrackProgress = () => {
  const theme = useContext(ThemeContext)

  return (
    <Grid color={theme.colors.background}>
      <Col hCenter marginTop="medium">
        <Text color="headingText" bold size="medium" text="Track By Month" />
        <ChartByMonth />
      </Col>

      <Col hCenter marginTop="large">
        <Text
          color="headingText"
          bold
          size="medium"
          text="Track By Mock Test Score"
        />
        <ChartByMockTest />
      </Col>
    </Grid>
  )
}

export default TrackProgress

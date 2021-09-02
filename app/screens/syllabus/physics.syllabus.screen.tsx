import React, {useContext} from 'react'
import {ScrollView} from 'react-native'
import {ThemeContext} from 'styled-components/native'
import {Col, Grid, Text} from '../../components'

const text1 = `
Measurement, Force & Motion, Atomic Structure, Mole Concept, Matter - Structure 
and  Properties, Solution,  Acids,  Bases  &  Salts,  Work,  Power  &  Energy, Sound, Heat, Separation  of 
Components of Mixtures, Water.
`

const PhysicsSyllabus = () => {
  const theme = useContext(ThemeContext)

  return (
    <Grid color={theme.colors.background}>
      <Col hCenter marginTop="small">
        <Text bold size="medium" color="headingText" text="Physics Syllabus" />
      </Col>
      <ScrollView>
        <Col paddingVertical="tiny" paddingHorizontal="medium">
          <Text color="headingText" text={text1} />
        </Col>
      </ScrollView>
    </Grid>
  )
}

export default PhysicsSyllabus

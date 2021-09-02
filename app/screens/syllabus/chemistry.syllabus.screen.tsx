import React, {useContext} from 'react'
import {ScrollView} from 'react-native'
import {ThemeContext} from 'styled-components/native'
import {Col, Grid, Text} from '../../components'

const text1 = `
Concerns  about  our  Environment,  Behavior  of  Gases,  Light,  Periodic  Table  and  Periodicity  of  the 
Properties  of  Elements,  Ionic  and  Covalent  Bonding,  Chemical  Calculations,  Thermal  Phenomena,  
Current  Electricity,  Electricity  and  Chemical  Reactions,  Inorganic  Chemistry  in  the  Laboratory  and  in 
Industry, Metallurgy, Atomic Nucleus, Organic Chemistry and General Awareness. 
`

const ChemistrySyllabus = () => {
  const theme = useContext(ThemeContext)

  return (
    <Grid color={theme.colors.background}>
      <Col hCenter marginTop="small">
        <Text
          bold
          size="medium"
          color="headingText"
          text="Mathematics Syllabus"
        />
      </Col>
      <ScrollView>
        <Col paddingVertical="tiny" paddingHorizontal="medium">
          <Text color="headingText" text={text1} />
        </Col>
      </ScrollView>
    </Grid>
  )
}

export default ChemistrySyllabus

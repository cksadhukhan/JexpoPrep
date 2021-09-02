import React, {useContext} from 'react'
import {ScrollView} from 'react-native'
import {ThemeContext} from 'styled-components/native'
import {Col, Grid, Text} from '../../components'

const text1 = `
Real Numbers,  Laws of Indices, Graph, Co-ordinate Geometry - Distance Formula, 
Linear Simultaneous Equations, Properties of Parallelogram, Polynomial, Factorization, Transversal \u0026 
Mid-Point Theorem, Profit \u0026 Loss, Statistics, Theorems on Area, Construction of a Parallelogram whose 
measurement of one angle is given and equal in area of a Triangle, Construction of a Triangle equal in 
area of a quadrilateral, Area \u0026 Perimeter of Triangle \u0026 Quadrilateral shaped region, Circumference of 
Circle, Theorems on concurrence, Area of circular region, Co-ordinate Geometry - Internal and External 
Division of Straight Line Segment, Co-ordinate Geometry - Area of Triangular Region, Logarithm.
`

const text2 = `
Quadratic  Equations  with  one  variable,  Simple  Interest,  Theorems  related  to  circle,  Rectangular 
Parallelopiped or Cuboid, Ratio and Proportion, Compound Interest and Uniform Rate of Increase or 
Decrease, Theorems related to Angles in a Circle, Right Circular Cylinder, Quadratic Surd, Theorems 
related to Cyclic Quadrilateral, Construction of circumcircle and incircle of a triangle, Sphere, Variation, 
Partnership  Business,  Theorems  related  to  Tangent  to  a  Circle,  Right  Circular  Cone,  Similarity,
`

const text3 = `
Construction of tangent to a circle, Real life Problems related to different Solid Objects, Trigonometry - 
Concept  of  Measurement  of  Angle,  Construction  -  Determination  of  Mean  Proportional,  Pythagoras 
Theorem,  Trigonometric  Ratios  and  Trigonometric  Identities,  Trigonometric  Ratios  of  Complementary 
angle, Application of Trigonometric Ratios - Heights & Distances, Statistics - Mean, Median, Ogive, Mode 
and Numerical Aptitude.  
`

const MathematicsSyllabus = () => {
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

        <Col paddingVertical="tiny" paddingHorizontal="medium">
          <Text color="headingText" text={text2} />
        </Col>

        <Col paddingVertical="tiny" paddingHorizontal="medium">
          <Text color="headingText" text={text3} />
        </Col>
      </ScrollView>
    </Grid>
  )
}

export default MathematicsSyllabus

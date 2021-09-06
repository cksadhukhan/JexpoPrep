import React, {useContext, useState} from 'react'
import {
  View,
  useColorScheme,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import {ThemeContext} from 'styled-components/native'
import {Col, Row, Text} from '../../components'
import {openDatabase} from 'react-native-sqlite-storage'

interface QuestionItemProps {
  data: Question
  index: number
}

const QuestionItem: React.FunctionComponent<QuestionItemProps> = (
  props: QuestionItemProps,
) => {
  const {index, data} = props
  const getAnswer = () => {
    if (data.answer === 1) {
      return 'a'
    } else if (data.answer === 2) {
      return 'b'
    } else if (data.answer === 3) {
      return 'c'
    } else {
      return 'd'
    }
  }

  const answer = getAnswer()

  return (
    <Col marginBottom="small">
      <Col color="#1d815b" padding="small" marginBottom="small">
        <Text
          color="white"
          size="medium"
          text={`${index + 1}. ${data.question}`}
        />
      </Col>
      <Col>
        <Text text={`(a) ${data.option1}`} />
      </Col>
      <Col>
        <Text text={`(b) ${data.option2}`} />
      </Col>
      <Col>
        <Text text={`(c) ${data.option3}`} />
      </Col>
      <Col>
        <Text text={`(d) ${data.option4}`} />
      </Col>

      <Row style={{justifyContent: 'flex-end'}} marginTop="small">
        <Text bold size="medium" text={`Answer: ${answer}`} />
      </Row>
    </Col>
  )
}

interface Question {
  id: number
  question: string
  option1: string
  option2: string
  option3: string
  option4: string
  answer: number
  hasImage: number
  imageName: string
}

const SettingsScreen = () => {
  const theme = useContext(ThemeContext)
  const colorScheme = useColorScheme()

  const yearValues = [
    {label: '2020', value: 2020},
    {label: '2019', value: 2019},
    {label: '2018', value: 2018},
    {label: '2017', value: 2017},
    {label: '2016', value: 2016},
    {label: '2015', value: 2015},
    {label: '2014', value: 2014},
    {label: '2013', value: 2013},
    {label: '2012', value: 2012},
    {label: '2011', value: 2011},
    {label: '2010', value: 2010},
  ]

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState(yearValues)

  if (colorScheme === 'dark') DropDownPicker.setTheme('DARK')
  else DropDownPicker.setTheme('LIGHT')

  // @ts-ignore
  const db = openDatabase({name: 'math_2019.db', createFromLocation: 1})

  const [questions, setQuestions] = useState<Array<Question>>([])

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM math_2019', [], (tx, results) => {
        var temp = []
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i))
        setQuestions(temp)
        console.log(questions)
      })
    })
  }, [])

  return (
    <View style={{marginHorizontal: 10}}>
      <Col marginVertical="small">
        <Text bold text="Select Year" size="medium" />
      </Col>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        disableBorderRadius={true}
        placeholder="Select the year"
        onChangeValue={(value) => {
          console.log(value)
        }}
        style={{borderRadius: 0}}
        dropDownContainerStyle={{borderRadius: 0}}
      />
      <ScrollView
        style={{marginTop: 20, marginBottom: 100}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {questions &&
          questions.map((question: Question, index: number) => {
            return <QuestionItem key={index} index={index} data={question} />
          })}
      </ScrollView>
    </View>
  )
}

export default SettingsScreen

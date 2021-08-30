import React from 'react'
import {ReactNode} from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import Svg, {Path} from 'react-native-svg'
import {getGreet} from '../../utils'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import OcticonsIcon from 'react-native-vector-icons/Octicons'

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            height: 100,
            marginTop: -20,
            backgroundColor: '#0A81AB',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{paddingLeft: 15, flex: 2}}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontFamily: 'Roboto-SemiBold',
              }}>
              Hi, {getGreet()}
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 15,
                color: '#fff',
                fontFamily: 'Roboto-Light',
              }}>
              Let's Start Learning
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 20,
              margin: 10,
              backgroundColor: '#f5f5f5',
              borderRadius: 15,
            }}>
            <OcticonsIcon name="graph" size={16} />
            <Text>Track Progress</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
            marginTop: 20,
            marginBottom: 5,
          }}>
          <View
            style={{
              height: 20,
              width: 5,
              marginRight: 5,
              backgroundColor: '#0A81AB',
            }}></View>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-SemiBold'}}>
            Subjects
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#638cd8',
            }}>
            <MaterialCommunityIcon
              name="calculator-variant"
              size={24}
              color="#f5f5f5"
            />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Mathematics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#70c070',
            }}>
            <MaterialCommunityIcon name="magnet-on" size={24} color="#f5f5f5" />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Physics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#d370be',
            }}>
            <MaterialCommunityIcon name="test-tube" size={24} color="#f5f5f5" />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Chemistry</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
            marginTop: 20,
            marginBottom: 5,
          }}>
          <View
            style={{
              height: 20,
              width: 5,
              marginRight: 5,
              backgroundColor: '#0A81AB',
            }}></View>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-SemiBold'}}>
            Practice Sets
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#dd6b7b',
            }}>
            <MaterialCommunityIcon
              name="calculator-variant"
              size={24}
              color="#f5f5f5"
            />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Subjects</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#3f72be',
            }}>
            <MaterialCommunityIcon name="magnet-on" size={24} color="#f5f5f5" />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Physics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#e2a865',
            }}>
            <MaterialCommunityIcon name="test-tube" size={24} color="#f5f5f5" />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Chemistry</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
            marginTop: 20,
            marginBottom: 5,
          }}>
          <View
            style={{
              height: 20,
              width: 5,
              marginRight: 5,
              backgroundColor: '#0A81AB',
            }}></View>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-SemiBold'}}>
            Previous Year Questions
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#638cd8',
            }}>
            <MaterialCommunityIcon name="bookshelf" size={24} color="#f5f5f5" />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Subjects Wise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginHorizontal: 5,
              height: 100,
              backgroundColor: '#c396d8',
            }}>
            <MaterialCommunityIcon name="calendar" size={24} color="#f5f5f5" />
            <Text style={{fontSize: 14, color: '#f5f5f5'}}>Year Wise</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

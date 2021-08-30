import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

const NotFoundScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/not-found.png')}
        style={{width: 400, height: 400}}
      />
      <View>
        <Text
          style={{
            color: '#0A81AB',
            fontSize: 16,
            textTransform: 'uppercase',
            fontFamily: 'Roboto-Medium',
          }}>
          Connection Lost
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: 'slategray',
            fontSize: 14,
            fontFamily: 'Roboto-Regular',
          }}>
          You are not connected. Please check your network.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
          height: 40,
          width: 150,
          backgroundColor: '#0A81AB',
        }}>
        <Text style={{color: 'white', fontFamily: 'Roboto'}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NotFoundScreen

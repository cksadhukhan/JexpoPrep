import React from 'react'
import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OnBoard = ({navigation}: any) => {
  const {width, height} = useWindowDimensions()

  async function storeToken() {
    try {
      await AsyncStorage.setItem('isOnBoarded', 'true')
      navigation.replace('Home')
    } catch (error) {
      console.log('Something went wrong', error)
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#4c669f" barStyle="light-content" />
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{flex: 1}}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: height / 9,
            fontSize: 26,
            fontWeight: '600',
            color: '#fff',
            padding: 10,
            borderRadius: 20,
          }}>
          Welcome to JexpoPrep
        </Text>
        <LottieView
          // source={require('../../assets/lottie/onboarding.json')}
          source={require('../../assets/lottie/onboarding.json')}
          autoPlay
          loop
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fcfcfc',
              padding: 10,
              alignItems: 'center',
              width: width / 2,
              position: 'absolute',
              bottom: height / 9,
              borderRadius: 5,
            }}
            onPress={() => {
              storeToken()
            }}>
            <Text style={{fontSize: 16, color: '#4c669f', fontWeight: '600'}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  )
}

export default OnBoard

import {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useAsyncStorage = (key: any, initialValue: any) => {
  const [data, setData] = useState(initialValue)
  const [retrievedFromStorage, setRetrievedFromStorage] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const value = await AsyncStorage.getItem(key)
        if (value) setData(JSON.parse(value))
        else setData(initialValue)
        setRetrievedFromStorage(true)
      } catch (error) {
        console.error('useAsyncStorage getItem error:', error)
      }
    })()
  }, [key, initialValue])

  const setNewData = async (value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
      setData(value)
    } catch (error) {
      console.error('useAsyncStorage setItem error:', error)
    }
  }

  return [data, setNewData, retrievedFromStorage]
}

export default useAsyncStorage

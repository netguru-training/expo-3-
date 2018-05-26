import React from 'react'
import { View, TextInput } from 'react-native'
import {
  CurrentWeatherInfo,
  WeatherEventListElement,
  AddEventForm
} from '../../components'
import styles from './AddEventScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle
} = styles

const AddEventScreen = () => {
  return (
    <View
      style={containerStyle}
    >
      <AddEventForm date={new Date()}/>
    </View>
  )
}

export default AddEventScreen

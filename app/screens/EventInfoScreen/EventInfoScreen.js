import React from 'react'
import { View } from 'react-native'
import {
  CurrentWeatherInfo,
  WeatherEventListElement
} from '../../components'
import styles from './AddEventScreen.styles'

const {
  containerStyle,
  currentWeatherContainerStyle
} = styles

const EventInfoScreen = () => {
  return (
    <View
      style={containerStyle}
    >
      <View
        style={currentWeatherContainerStyle}
      >
        <CurrentWeatherInfo
          headerInfo='Monday'
          imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
          footerInfo='25 *C'
        />
      </View>
      <View
        style={containerStyle}
      >
        <WeatherEventListElement
          headerInfo='Tuesday'
          imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
          footerInfo='25 *C'
        />
      </View>
    </View>
  )
}

export default EventInfoScreen

import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import styles from './WeatherHint.styles'
import getHint from './hints.js'

const WeatherHint = ({
  weather, icon
}) => {
  const hint = getHint(weather);
  if (!hint) return null;

  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={{
          uri: icon
        }}
      />
      <Text style={styles.text}>
        {hint}
      </Text>
    </View>
  )
}

WeatherHint.propTypes = {
  weather: PropTypes.shape({
    description: PropTypes.string,
    temp: PropTypes.number,
    wind: PropTypes.number,
    snow: PropTypes.number,
    precip: PropTypes.number
  }).isRequired,
  icon: PropTypes.string.isRequired
}

WeatherHint.defaultProps = {
  weather: {},
  icon: ''
}

export default WeatherHint

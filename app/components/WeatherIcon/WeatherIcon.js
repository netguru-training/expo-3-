import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import styles from './WeatherIcon.styles'

const WeatherIcon = ({
  icon, large
}) => {
  if (!icon) return null
  const size = large ? 'large' : 'small';
  return (
    <Image
        style={styles[size]}
        source={{
            uri: icon
        }}
    />
  )
}

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  large: PropTypes.bool
}

WeatherIcon.defaultProps = {
  icon: '',
  large: false
}

export default WeatherIcon

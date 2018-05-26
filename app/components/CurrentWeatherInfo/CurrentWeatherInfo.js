import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import styles from './CurrentWeatherInfo.styles'

const {
  container,
  containerRow,
  headerInfoStyle,
  footerInfoStyle,
  imageStyle,
  textSmall,
  imageStyleSmall
} = styles

const CurrentWeatherInfo = ({
  imageUrl, headerInfo, footerInfo, rowDirection
}) => {
  return (
    <View
      style={[container, rowDirection && containerRow]}
    >
      <Text
        style={[headerInfoStyle, rowDirection && textSmall]}
      >
        {headerInfo}
      </Text>
      <Image
        style={[imageStyle, rowDirection && imageStyleSmall]}
        source={{ uri: imageUrl }}
      />
      <Text
        style={[footerInfoStyle, rowDirection && textSmall]}
      >
        {footerInfo}
      </Text>
    </View>
  )
}

CurrentWeatherInfo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  rowDirection: PropTypes.bool,
  headerInfo: PropTypes.string,
  footerInfo: PropTypes.string
}

CurrentWeatherInfo.defaultProps = {
  rowDirection: false,
  headerInfo: '',
  footerInfo: ''
}

export default CurrentWeatherInfo

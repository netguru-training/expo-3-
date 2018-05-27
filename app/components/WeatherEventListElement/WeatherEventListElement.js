import React from 'react'
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo'
import styles from './WeatherEventListElement.styles'

const {
  containerStyle,
  currentWeatherEventContainerStyle,
  currentEventsNumberStyle,
  addEventContainerStyle,
  plusStyle
} = styles

class WeatherEventListElement extends React.PureComponent {

  render() {
    const { 
      imageUrl,
      eventsNumber,
      headerInfo,
      footerInfo,
      onPressViewEvents,
      onPressAdd
    } = this.props;
    const eventsNumberInfo = eventsNumber > 0 ?
      `You Have ${eventsNumber} events today` : 'You have no events today'
    
    return (
        <View
          style={containerStyle}
        >
          
          <TouchableOpacity
            style={currentWeatherEventContainerStyle}
            onPress={() => onPressViewEvents()}
          >
            <CurrentWeatherInfo
              headerInfo={headerInfo}
              imageUrl={imageUrl}
              footerInfo={footerInfo}
              rowDirection
            />
            <Text
              style={currentEventsNumberStyle}
            >
              {eventsNumberInfo}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addEventContainerStyle}
            onPress={() => onPressAdd()}
          >
            <Text
              style={plusStyle}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      )
   }
}

WeatherEventListElement.propTypes = {
  weatherIcon: PropTypes.object,
  imageUrl: PropTypes.string.isRequired,
  eventsNumber: PropTypes.number,
  headerInfo: PropTypes.string,
  footerInfo: PropTypes.string,
  onPressAdd: PropTypes.func
}

WeatherEventListElement.defaultProps = {
  eventsNumber: 0,
  headerInfo: '',
  footerInfo: ''
}

export default WeatherEventListElement

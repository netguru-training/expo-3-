import React from 'react'
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo'
import styles from './WeatherEventListElement.styles'
import { fetchDailyWeather } from '../../actions/weather'

const {
  containerStyle,
  currentWeatherEventContainerStyle,
  currentEventsNumberStyle,
  addEventContainerStyle,
  plusStyle
} = styles

class WeatherEventListElement extends React.PureComponent {
  fetchData = () => this.props.fetchDailyWeather()
  
  render() {
    const { imageUrl,
      eventsNumber,
      headerInfo,
      footerInfo } = this.props;
    const eventsNumberInfo = eventsNumber > 0 ?
      `You Have ${eventsNumber} events today` : 'You have no events today'
    
    return (
      <View
        style={containerStyle}
      >
        <TouchableOpacity
          style={currentWeatherEventContainerStyle}
        >
          <TouchableOpacity
            style={currentWeatherEventContainerStyle}
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
  imageUrl: PropTypes.string.isRequired,
  eventsNumber: PropTypes.number,
  headerInfo: PropTypes.string,
  footerInfo: PropTypes.string,

  fetchDailyWeather: PropTypes.func.isRequired
}

WeatherEventListElement.defaultProps = {
  eventsNumber: 0,
  headerInfo: '',
  footerInfo: ''
}

export default connect(null, { fetchDailyWeather })(WeatherEventListElement)

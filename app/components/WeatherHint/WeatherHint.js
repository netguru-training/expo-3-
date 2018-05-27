import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import { WeatherIcon } from '../'
import _ from 'lodash';

import styles from './WeatherHint.styles'
import getHint from './hints.js'
import { getKeyDateTime } from '../../commons';

const weatherSelector = (state, props) => {
  const keyDate = getKeyDateTime(props.date)  
  const { weather } = state;
  return weather[keyDate] || {};
}

class WeatherHint extends React.PureComponent {
  
  render() {
    const { weather, icon, date } = this.props;
    const hint = getHint(weather);
    if (!hint) return null;
    console.info(this.props);
    return (
      <View style={styles.container}>
        <WeatherIcon icon={icon} />
        <Text style={styles.text}>
          {hint}
        </Text>
      </View>
    )
  }
}

WeatherHint.propTypes = {
  date: PropTypes.object.isRequired,
  weather: PropTypes.shape({
    description: PropTypes.string,
    temp: PropTypes.number,
    wind: PropTypes.number,
    snow: PropTypes.number,
    precip: PropTypes.number
  }).isRequired,
  icon: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
  weather: weatherSelector(state, props)
})

WeatherHint.defaultProps = {
  icon: ''
}

export default connect(mapStateToProps)(WeatherHint)

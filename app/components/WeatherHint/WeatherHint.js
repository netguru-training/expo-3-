import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './WeatherHint.styles';
import getHint from './hints';
import { WeatherIcon } from '../';
import { getKeyDateTime } from '../../commons';

const weatherSelector = (state, props) => {
  const keyDate = getKeyDateTime(props.date);
  const { weather } = state;
  return weather[keyDate] || {};
};

class WeatherHint extends React.PureComponent {
  get iconUrl() {
    const { weather: { weather: { icon = '' } = {} } = {} } = this.props;
    return `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  }

  render() {
    const { weather } = this.props;
    const hint = getHint(weather);
    if (!hint) return null;

    return (
      <View style={styles.container}>
        <WeatherIcon icon={this.iconUrl} />
        <Text style={styles.text}>{hint}</Text>
      </View>
    );
  }
}

WeatherHint.propTypes = {
  weather: PropTypes.shape({
    description: PropTypes.string,
    temp: PropTypes.number,
    wind: PropTypes.number,
    snow: PropTypes.number,
    precip: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  weather: weatherSelector(state, props),
});

WeatherHint.defaultProps = {};

export default connect(mapStateToProps)(WeatherHint);

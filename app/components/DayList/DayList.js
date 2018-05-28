import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FlatList } from 'react-native';
import { WeatherEventListElement } from '../';
import { getIconUrl } from '../../commons';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class DayList extends React.Component {
  makeFlatList = (events, weather) => {
    const dateToDayName = date => {
      const currentDay = new Date(date).getDay();
      return days[currentDay];
    };

    return _.map(weather, day => ({
      date: day.datetime,
      dayName: dateToDayName(day.datetime),
      temp: day.temp,
      taskCount: events[day.datetime].length,
      weather: weather[day.datetime],
    }));
  };

  renderItem = ({ item }) => {
    const { weather: { weather: { icon } = {} } = {} } = item;
    const iconUrl = icon ? getIconUrl(icon) : '';
    return (
      <WeatherEventListElement
        date={item.date}
        headerInfo={item.dayName}
        eventsNumber={item.taskCount}
        imageUrl={iconUrl}
        footerInfo={`${item.temp} °C`}
        onPressViewEvents={() => this.props.goToEventListScreen(item.date)}
        onPressAdd={() => this.props.goToAddEventScreen(item.date)}
      />
    );
  };

  render() {
    const data = this.makeFlatList(this.props.events, this.props.weather);
    if (_.isEmpty(data)) return null;
    return (
      <FlatList
        ListHeaderComponent={this.props.header}
        keyExtractor={({ date }) => date}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

DayList.propTypes = {
  header: PropTypes.any.isRequired,
  weather: PropTypes.object.isRequired,
  events: PropTypes.object.isRequired,

  goToAddEventScreen: PropTypes.func.isRequired,
  goToEventListScreen: PropTypes.func.isRequired,
};

export default DayList;

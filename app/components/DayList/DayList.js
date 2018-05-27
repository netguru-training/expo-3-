import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { View, FlatList, Text } from 'react-native'
import { WeatherEventListElement } from '../'
import styles from './DayList.styles'

class DayList extends React.Component {

  constructor(props) {
    super(props)
  }

  makeFlatList(events, weather) {
    const dateToDayName = date => {
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(date).getDay()]
    }

    return _.map(weather, day => ({
      date: day.datetime,
      dayName: dateToDayName(day.datetime),
      temp: day.temp,
      taskCount: events[day.datetime].length
    }))
  }

  renderItem = ({item}) => {

    return (
      <WeatherEventListElement
        date={item.date}
        headerInfo={item.dayName}
        eventsNumber={item.taskCount}
        imageUrl='https://www.weatherbit.io/static/img/icons/t01d.png'
        footerInfo={`${item.temp} °C`}
        onPressViewEvents={() => this.props.goToEventListScreen(item.date)}
        onPressAdd={() => this.props.goToAddEventScreen(item.date)}
      />
    )
  }

  render() {
    const data = this.makeFlatList(this.props.events, this.props.weather);
    if (_.isEmpty(data)) return null;
    return (
      <FlatList
        ListHeaderComponent={this.props.header}
        keyExtractor={({date}) => date}
        data={data}
        renderItem={this.renderItem}
      />
    )
  }
}

export default DayList

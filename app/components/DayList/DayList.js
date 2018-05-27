import React from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, Text } from 'react-native'
import { WeatherEventListElement } from '../'
import styles from './DayList.styles'

// Mock data
const data = [
  {
    date: '2018-05-27',
    dayName: 'Sunday',
    temp: 25,
    taskCount: 3
  },
  {
    date: '2018-05-28',
    dayName: 'Monday',
    temp: 30,
    taskCount: 0
  },
  {
    date: '2018-05-29',
    dayName: 'Tuesday',
    temp: 32,
    taskCount: 2
  },
  {
    date: '2018-05-30',
    dayName: 'Wednesday',
    temp: 23,
    taskCount: 1
  },
  {
    date: '2018-05-31',
    dayName: 'Thursday',
    temp: 25,
    taskCount: 0
  },
  {
    date: '2018-06-01',
    dayName: 'Friday',
    temp: 28,
    taskCount: 0
  },
  {
    date: '2018-06-02',
    dayName: 'Saturday',
    temp: 15,
    taskCount: 0
  }
]

class DayList extends React.Component {

  constructor(props) {
    super(props)
  }

  renderItem = ({item}) => {

    return (
      <WeatherEventListElement
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

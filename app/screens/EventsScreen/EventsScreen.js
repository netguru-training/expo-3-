import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Constants } from 'expo';
import {
  EventListItem,
  WeatherHint
} from '../../components'
import styles from './EventsScreen.styles'
import { toggleEvent } from '../../actions/events';


const getEventsForDay = (state, props) => {
  const { navigation: { state: { params: { date } } } } = props;
  console.info(date);
  console.info(state)
  return state.events[date];
}


class EventsScreen extends Component {

  render() {
    const date = this.props.navigation.state.params.date;//navigation.getParam('itemId', 'NO-ID');
    // const eventsForDay = [{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false}];
    console.log(eventsForDay);
    const eventsList = this.props.eventsForDay.map((event, index) => {
      return (
        <EventListItem key={index} isDone={event.isDone} description={event.description} onPressCheckbox={() => toggleEvent(date,event.id) }>
          {event.name}
        </EventListItem>
    )})
    return (
      <ScrollView>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>{date}</Text>
        </View>

        {eventsList}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => ({
  eventsForDay: getEventsForDay(state, props)
})

EventsScreen.propTypes = {
  eventsForDay: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(EventsScreen)

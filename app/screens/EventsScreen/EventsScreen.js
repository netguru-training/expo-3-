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
  return state.events[date];
}

class EventsScreen extends Component {
  _handleToggleEvent = (date,id) => {
    console.log('HELLLO',date,id);
    this.props.toggleEvent(date, id);
  }

  render() {
    const date = this.props.navigation.state.params.date;//navigation.getParam('itemId', 'NO-ID');
    const eventsList = this.props.eventsForDay.map((event, index) => {
      const { id, description, title, isDone } = event;
      return (
        <EventListItem key={index} isDone={isDone} description={description} onPressCheckbox={() => this._handleToggleEvent(date,event.id) }>
          {title}
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
  eventsForDay: PropTypes.array.isRequired
}

export default connect(mapStateToProps, {toggleEvent})(EventsScreen)

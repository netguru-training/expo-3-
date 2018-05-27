import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, TextInput, Button, ListView } from 'react-native';
import { Constants } from 'expo';
import {
  EventListItem,
} from '../../components'
import styles from './EventsScreen.styles'

const getEventsForDay = (state, props) => {
  const { navigation: { state: { params: { date } } } } = props;
  return state.events[date];
}

class EventsScreen extends Component {
  toggleEvent = () => {

  }

  render() {
    const date = this.props.navigation.state.params.date;//navigation.getParam('itemId', 'NO-ID');
    const eventsList = this.props.eventsForDay.map((event, index) => {
      const { id, data: { description, title, isDone } } = event;
      return (
        <EventListItem key={index} isDone={isDone} description={description} toggleEvent={this.toggleEvent}>
          {title}
        </EventListItem>
    )})
    return (
      <View>
        <View>
          <Text>{date}</Text>
        </View>
        {eventsList}
      </View>
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

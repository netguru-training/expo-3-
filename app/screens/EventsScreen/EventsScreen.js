import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Constants } from 'expo';  // eslint-disable-line
import { EventListItem, WeatherHint } from '../../components';
import styles from './EventsScreen.styles';
import { toggleEvent } from '../../actions/events';

const getEventsForDay = (state, props) => {
  const {
    navigation: {
      state: {
        params: { date },
      },
    },
  } = props;
  return state.events[date];
};

class EventsScreen extends Component {
  handleToggleEvent = (date, id) => {
    this.props.toggleEvent(date, id);
  };

  render() {
    const {
      navigation: {
        state: {
          params: { date },
        },
      },
    } = this.props; // navigation.getParam('itemId', 'NO-ID');
    const eventsList = this.props.eventsForDay.map((event, index) => {
      const { description, title, isDone } = event;
      return (
        <EventListItem
          key={index}
          isDone={isDone}
          description={description}
          onPressCheckbox={() => this.handleToggleEvent(date, event.id)}
        >
          {title}
        </EventListItem>
      );
    });
    return (
      <ScrollView>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStyle}>{date}</Text>
        </View>
        <WeatherHint date={new Date(date)} />

        {eventsList}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => ({
  eventsForDay: getEventsForDay(state, props),
});

EventsScreen.propTypes = {
  eventsForDay: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,

  toggleEvent: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { toggleEvent }
)(EventsScreen);

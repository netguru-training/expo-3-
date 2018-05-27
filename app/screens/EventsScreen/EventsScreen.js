import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ListView, ScrollView } from 'react-native';
import { Constants } from 'expo';
import {
  EventListItem,
  WeatherHint
} from '../../components'
import styles from './EventsScreen.styles'
import { toggleEvent } from '../../actions/events';


class EventsScreen extends Component {

  render() {
    const date = '2018-05-12';//navigation.getParam('itemId', 'NO-ID');
    const eventsForDay = [{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
  {id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},
{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false},];
    const eventsList = eventsForDay.map((event, index) => {
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
export default EventsScreen

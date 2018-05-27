import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, ListView } from 'react-native';
import { Constants } from 'expo';
import {
  EventListItem,
} from '../../components'
import styles from './EventsScreen.styles'

class EventsScreen extends Component {


  /*constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      inputValue: '',
      dataSource: ds.cloneWithRows([]),
    };
    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleDeleteButtonPress = this._handleDeleteButtonPress.bind(this);
  }

  _handleTextChange = (value) => {
    const inputValue = value;
    this.setState(() => ({
      inputValue,
    }));
  }

  _handleSendButtonPress = () => {
    if (!this.state.inputValue) {
      return;
    }
    const textArray = this.state.dataSource._dataBlob.s1;
    textArray.push(this.state.inputValue);
    this.setState(() => ({
      dataSource: this.state.dataSource.cloneWithRows(textArray),
      inputValue: '',
    }));
  };

  _handleDeleteButtonPress = (id) => {
    this.setState((a) => {
      const newItem = a.dataSource._dataBlob.s1.filter((item, i) => (parseInt(id) !== i));
      return {
        dataSource: this.state.dataSource.cloneWithRows(newItem),
      }
    });
  };

*/
  toggleEvent(){

  }

  render() {
    const date = '2018-05-12';//navigation.getParam('itemId', 'NO-ID');
    const eventsForDay = [{id: 12, name:"smthgg",description:"opsispisois", isDone:true},{id:13, name:"smthgg",description:"opsispisois", isDone:false}];
    const eventsList = eventsForDay.map((event, index) => {
      return (
        <EventListItem key={index} isDone={event.isDone} description={event.description} toggleEvent={this.toggleEvent}>
          {event.name}
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
/*
    return (
      <View style={styles.container}>
        <View style={styles.formView}>
          <View style={styles.flowRight}>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.searchInput}
              placeholder='Search your event name'/>
            <Button
              onPress={() => {}}
              color='#48BBEC'
              title='Go'
            />
          </View>
          <TextInput
            style={styles.inputForm}
            value={this.state.inputValue}
            onChangeText={this._handleTextChange}
            placeholder="Input todo"
          />
          <Button
            title="Add"
            onPress={this._handleSendButtonPress}
          />
        </View>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionID, rowID) => {
            const handleDelete = () => {
              return this._handleDeleteButtonPress(rowID);
            }
            return (
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{rowData}</Text>
                <Button
                  title="+"
                  onPress={this._handleSendButtonPress}
                  style={styles.deleteButton}
                />

              </View>
              );
            }
          }
        />

      </View>
    );*/
  }
}
export default EventsScreen

import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Image, Alert, Button, Text, Modal, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'


import styles from './EventListItem.styles'


class EventListItem extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = {
      isExtended:false
    }
  }
  render() {
    let desc='';
    if(this.state.isExtended){
      desc= <Text>{this.props.description}</Text>;
    }
    return (
      <View>
        <CheckBox
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.props.isDone}
          onPress={this.props.toggleEvent}
        />
        <TouchableOpacity
          onPress={() => this.setState({isExtended: !this.state.isExtended})}
        >
          <Text>{this.props.children}</Text>
          {desc}
        </TouchableOpacity>
      </View>
    )
  }
}

EventListItem.propTypes = {
  isDone: PropTypes.bool.isRequired
}

export default EventListItem;

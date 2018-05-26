import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, TextInput, Image, Alert, Button, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from './AddEventForm.styles'
import { addEvent } from '../../actions/events';

const {
  textLabel
} = styles

class AddEventForm extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  get date() {
    const { date } = this.props;
    return date.toUTCString();
  }

  handleTitle = title => {
    this.setState({ title });
  }
  
  handleDescription = description => {
    this.setState({ description })
  }

  onDoneButtonClick = () => {
    const { title, description } = this.state;
    this.props.addEvent(day, { title, description }); 
  }

  render() {
    return (
      <View>
        <Text style={textLabel}> You are adding event to the following date: {this.date} </Text>
        
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={this.handleTitle} />
  
        <FormLabel>Description</FormLabel>
        <FormInput onChangeText={this.handleDescription} />
  
        <Button
          onPress={this.onDoneButtonClick}
          title="Done"
        />
        
      </View>
    )
  }
}

AddEventForm.propTypes = {
  date: PropTypes.object.isRequired,
  
  addEvent: PropTypes.func.isRequired
}

export default connect(null, { addEvent })(AddEventForm);

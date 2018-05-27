import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, TextInput, Image, Alert, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

import styles from './AddEventForm.styles'
import { addEvent } from '../../actions/events';
import { getKeyDateTime } from '../../commons';

const {
  textTitle,
  dateText,
  dateTextContainer,
  dateTextItem,
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
    return date;
  }

  get dateKey() {
    const { date } = this.props;
    return getKeyDateTime(date);
  }

  handleTitle = title => {
    this.setState({ title });
  }
  
  handleDescription = description => {
    this.setState({ description })
  }

  onDoneButtonClick = () => {
    const { title, description } = this.state;
    this.props.addEvent(this.dateKey, { title, description }); 
  }

  render() {
    return (
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={this.handleTitle} />
  
        <FormLabel>Description</FormLabel>
        <FormInput onChangeText={this.handleDescription} />
        
        <View style={dateTextContainer}>
          <View style={dateTextItem}>
            <Text style={dateText}>{this.date.getUTCDate()}</Text>
          </View>
          <View style={dateTextItem}>
            <Text style={dateText}>{this.date.toLocaleString('locale', { month: "short" })}</Text>
          </View>
          <View style={dateTextItem}>
            <Text style={dateText}>{this.date.getUTCFullYear()}</Text>
          </View>
        </View>
  
        <Button
          style={{marginTop: 40}}
          backgroundColor={'#5096fc'}
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

AddEventForm.defaultProps = {
  date: new Date()
}

export default connect(null, { addEvent })(AddEventForm);

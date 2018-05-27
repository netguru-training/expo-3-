import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, TextInput, Image, Alert, Button, Text, Modal, TouchableHighlight } from 'react-native'

import styles from './AddEventModal.styles'
import { addEvent } from '../../actions/events';
import AddEventForm from '../AddEventForm/AddEventForm';
import WeatherHint from '../WeatherHint/WeatherHint'

const {
  modalContent,
  modalWrapper,
  headerTitle,
  headerContent
} = styles

class AddEventModal extends React.PureComponent {

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.isVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={modalWrapper}>
          <WeatherHint date={this.props.date} />
            <View style={modalContent}>
              <View style={headerContent}>
                <Text style={headerTitle}> Create New Task </Text>
                <TouchableHighlight
                  onPress={() => {
                    this.props.closeModal();
                  }}>
                  <Text style={{ fontSize: 20}}>X</Text>
                </TouchableHighlight>
              </View>
              <AddEventForm date={new Date()}/>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

AddEventModal.propTypes = {
  date: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
}

AddEventModal.defaultProps = {
  date: new Date()
}

export default AddEventModal;

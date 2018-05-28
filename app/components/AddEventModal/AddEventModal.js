import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Modal, TouchableHighlight } from 'react-native';

import styles from './AddEventModal.styles';
import AddEventForm from '../AddEventForm/AddEventForm';
import WeatherHint from '../WeatherHint/WeatherHint';

const { modalContent, modalWrapper, headerTitle, headerContent, closeSign } = styles;

class AddEventModal extends React.PureComponent {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent
          visible={this.props.isVisible}
          onRequestClose={() => {}}
        >
          <View style={modalWrapper}>
            <View style={modalContent}>
              <WeatherHint date={this.props.date} />
              <View style={headerContent}>
                <Text style={headerTitle}> Create New Task </Text>
                <TouchableHighlight
                  style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    this.props.closeModal();
                  }}
                >
                  <Text style={closeSign}>X</Text>
                </TouchableHighlight>
              </View>
              <AddEventForm date={new Date()} closeModal={this.props.closeModal} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

AddEventModal.propTypes = {
  date: PropTypes.object,
  isVisible: PropTypes.bool.isRequired,

  closeModal: PropTypes.func.isRequired,
};

AddEventModal.defaultProps = {
  date: new Date(),
};

export default AddEventModal;

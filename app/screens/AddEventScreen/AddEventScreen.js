import React from 'react';
import { View } from 'react-native';
import { AddEventForm } from '../../components';
import styles from './AddEventScreen.styles';

const { containerStyle } = styles;

const AddEventScreen = () => (
  <View style={containerStyle}>
    <AddEventForm date={new Date()} />
  </View>
);

export default AddEventScreen;

import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { HomeScreen, AddEventScreen, EventInfoScreen } from './app/screens'
import styles from './RootNavigator.styles'

const { container } = styles

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  AddEvent: {
    screen: AddEventScreen
  },
  EventInfo: {
    screen: EventInfoScreen
  }
})

const RootNavigator = () => {
  return (
    <View
      style={container}
    >
      <Navigator />
    </View>
  )
}

export default RootNavigator

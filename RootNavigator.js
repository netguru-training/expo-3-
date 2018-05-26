import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { HomeScreen } from './app/screens'
import styles from './RootNavigator.styles'

const { container } = styles

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen
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

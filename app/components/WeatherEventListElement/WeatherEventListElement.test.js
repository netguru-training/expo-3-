import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { shallow } from 'enzyme'
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo'
import WeatherEventListElement from './WeatherEventListElement'

describe('Components: WeatherEventListElement', () => {
  const defaultProps = {
    headerInfo: 'Monday',
    imageUrl: 'https://www.freeiconspng.com/uploads/weather-icon-png-16.png',
    footerInfo: '25 *C',
    eventsNumber: 0
  }

  const wrapper = shallow(
    <WeatherEventListElement
      {...defaultProps}
    />
  )

  it('Should render with basic markup', () => {
    expect(wrapper.find(CurrentWeatherInfo).length).toBe(1)
    expect(wrapper.find(TouchableOpacity).length).toBe(2)
    expect(wrapper.find(Text).length).toBe(2)
    expect(wrapper.find(View).length).toBe(1)
  })

  it('Should receive proper props', () => {
    expect(wrapper.props().children[0].props.children[0].props.headerInfo)
      .toBe(defaultProps.headerInfo)
    expect(wrapper.props().children[0].props.children[0].props.imageUrl)
      .toBe(defaultProps.imageUrl)
    expect(wrapper.props().children[0].props.children[0].props.footerInfo)
      .toBe(defaultProps.footerInfo)
  })

  it('Should show proper message when no events', () => {
    expect(wrapper.props().children[0].props.children[1].props.children)
      .toBe('You have no events today')
  })

  it('Should show proper message when number of events > 0', () => {
    const props = {
      headerInfo: 'Monday',
      imageUrl: 'https://www.freeiconspng.com/uploads/weather-icon-png-16.png',
      footerInfo: '25 *C',
      eventsNumber: 3
    }

    const newWrapper = shallow(
      <WeatherEventListElement
        {...props}
      />
    )
    expect(newWrapper.props().children[0].props.children[1].props.children)
      .toBe('You Have 3 events today')
  })
})

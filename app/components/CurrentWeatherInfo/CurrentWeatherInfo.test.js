import React from 'react'
import { View, Text, Image } from 'react-native'
import { shallow } from 'enzyme'
import CurrentWeatherInfo from './CurrentWeatherInfo'

describe('Components: CurrentWeatherInfo', () => {
  const defaultProps = {
    headerInfo: 'Monday',
    imageUrl: 'https://www.freeiconspng.com/uploads/weather-icon-png-16.png',
    footerInfo: '25 *C'
  }
  const wrapper = shallow(
    <CurrentWeatherInfo
      {...defaultProps}
    />
  )

  it('Should render with basic markup', () => {
    expect(wrapper.find(View).length).toBe(1)
    expect(wrapper.find(Text).length).toBe(2)
    expect(wrapper.find(Image).length).toBe(1)
  })

  it('Should receive proper props', () => {
    expect(wrapper.props().children[0].props.children).toBe(defaultProps.headerInfo)
    expect(wrapper.props().children[1].props.source.uri).toBe(defaultProps.imageUrl)
    expect(wrapper.props().children[2].props.children).toBe(defaultProps.footerInfo)
  })
})

import { combineReducers } from 'redux'
import { weather } from './weather'
import { events } from './events'

export default combineReducers({
  weather,
  events
})

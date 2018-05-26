import { createStore } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import rootReducer from './app/redux/index'

const store = composeWithDevTools()(createStore)(rootReducer)

export default store

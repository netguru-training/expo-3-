// import { createStore } from 'redux'
// import { composeWithDevTools } from 'remote-redux-devtools'
// import rootReducer from './app/redux/index'
import thunk from 'redux-thunk';

// const store = composeWithDevTools()(createStore)(rootReducer)

// export default store

// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './app/redux/index'
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );
// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './app/redux/index'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store

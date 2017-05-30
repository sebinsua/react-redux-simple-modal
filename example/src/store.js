import { createStore, combineReducers } from 'redux'
import { reducer as modals } from 'react-redux-simple-modal'

export default createStore(
  combineReducers({ modals }),
  {},
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

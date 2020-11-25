import { combineReducers } from 'redux'
import navReducer from './nav/navReducer'

const rootReducer = combineReducers({
  nav: navReducer,
})

export default rootReducer

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

// Import reducers
import { workoutReducer, userReducer } from './reducers'
import AppNavigation from '../Navigation/AppNavigation'

export const navigationReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

export default () => {
    /* ------------- Assemble The Reducers ------------- */
    const rootReducer = combineReducers({
      nav: navigationReducer,
      workout: workoutReducer,
      user: userReducer
    })
  
    return configureStore(rootReducer, rootSaga)
  }
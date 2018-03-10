import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import workoutReducer from './WorkoutRedux'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    workout: workoutReducer
  })

  return configureStore(rootReducer, rootSaga)
}

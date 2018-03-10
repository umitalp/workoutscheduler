import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  selectWorkout: ['username'],
})

export const WorkoutTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  selectedWorkout: null,
})

export const request = (state, { workout }) =>
  state.merge({ selectedWorkout: workout })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECT_WORKOUT]: request,
})

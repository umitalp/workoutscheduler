import Immutable from 'seamless-immutable'

/* ------------- Types ------------- */
export const SELECT_WORKOUT = 'SELECT_WORKOUT'
export const ADD_PARTICIPANT = 'ADD_PARTICIPANT'
export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT'

/* ------------- Action ------------- */
export function selectWorkout(workout) {
  return { type: SELECT_WORKOUT, workout }
}

export function addParticiant(index) {
  return { type: ADD_PARTICIPANT, index }
}

export function removeParticiant(index) {
  return { type: REMOVE_PARTICIPANT, index }
}

/* ------------- Reducers ------------- */
const initialState = {
  selectedWorkout: null
}

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WORKOUT:
      return { ...state, selectedWorkout: action.workout}
    default:
      return state
  }
}
  
export default workoutReducer


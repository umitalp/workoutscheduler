import Immutable from 'seamless-immutable'
import addParticiant from '../Services/Api'

/* ------------- Types ------------- */
export const SELECT_WORKOUT = 'SELECT_WORKOUT'
export const ADD_PARTICIPANT = 'ADD_PARTICIPANT'
export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT'

/* ------------- Action ------------- */
export const selectWorkout = (workout) => {
  return dispatch => {
    dispatch({
      type: SELECT_WORKOUT, workout: workout
    })
  }
}

export const loadSocketDataToRedux = (data) => {
	return (dispatch) => {
		dispatch({ type: INITIAL_DATA, data })
	}	
}

export const addParticipantToRedux = (name, workout) => {
	return (dispatch) => {
      const data = {
        name,
        workout
      }

      // Call add reducer
      dispatch({ type: ADD_PARTICIPANT, name, workout })
	}	
}

export const removeParticipantFromRedux = (name, workout) => {
	return (dispatch) => {
      const data = {
        name,
        workout
      }

      // Call remove reducer
      dispatch({ type: REMOVE_PARTICIPANT, name, workout })
	}	
}

export const addParticipant = (socket, name, workout) => {
	return (dispatch) => {
      const data = {
        name,
        workout
      }

      // Send event to socket
      socket.emit('addParticipant', data)

      // Call add reducer
      dispatch({ type: ADD_PARTICIPANT, name, workout })
	}	
}

export const removeParticipant = (socket, name, workout) => {
	return (dispatch) => {
      const data = {
        name,
        workout
      }

      // Send event to socket
      socket.emit('removeParticipant', data)

      // Call remove reducer
      dispatch({ type: REMOVE_PARTICIPANT, name, workout })
	}	
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


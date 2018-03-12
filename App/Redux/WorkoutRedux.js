import Immutable from 'seamless-immutable'
import { socket } from '../Services/Socket'

/* ------------- Types ------------- */
export const SELECT_WORKOUT = 'SELECT_WORKOUT'
export const ADD_PARTICIPANT = 'ADD_PARTICIPANT'
export const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT'

/* ------------- Action ------------- */
export const selectWorkout = (title, tag) => {
  return (dispatch) => {
    dispatch({ type: SELECT_WORKOUT, title, tag})
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

export const addParticipant = (name, workout) => {
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

export const removeParticipant = (name, workout) => {
	return (dispatch) => {
      const data = {
        name,
        workout
      }

      // Send event to socket
      socket.emit('removeParticipant', data)

      // Call remove reducer
      dispatch({ type: REMOVE_PARTICIPANT, data })
	}	
}

/* ------------- Reducers ------------- */
const initialState = {
  selectedWorkout: {
    title: null,
    tag: null
  },
  aerobic: [
    { name: 'Alp' },
    { name: 'Umit' },
    { name: 'John' }
  ],
  gym: [
    { name: 'Eric' },
    { name: 'Alex' },
    { name: 'Seb' }
  ],
  pilates: [
    { name: 'Erich' },
    { name: 'Costa' },
    { name: 'Povol' }
  ],
  run: [
    { name: 'Justin' },
    { name: 'Greg' },
    { name: 'Brad' }
  ],
  yoga: [
    { name: 'Hayley' },
    { name: 'Costa' },
    { name: 'Pavel' }
  ]
}

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WORKOUT:
      return { ...state, selectedWorkout: { title: action.title, tag: action.tag }}
    case ADD_PARTICIPANT:
      return { ...state, workout: state[action.workout].push({ name: action.name }) }
    case REMOVE_PARTICIPANT:
      return { ...state, workout: state[action.workout].find(e => name === name).remove() }
    default:
      return state
  }
}
  
export default workoutReducer


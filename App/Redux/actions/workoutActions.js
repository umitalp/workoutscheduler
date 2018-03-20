import { socket } from '../../Services/Socket'
import {
    SELECT_WORKOUT,
    ADD_PARTICIPANT,
    REMOVE_PARTICIPANT
} from '../types'

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
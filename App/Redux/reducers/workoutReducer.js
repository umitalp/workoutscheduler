import {
    SELECT_WORKOUT,
    ADD_PARTICIPANT,
    REMOVE_PARTICIPANT
} from '../types'

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
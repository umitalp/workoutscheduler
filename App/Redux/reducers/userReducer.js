import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types'

/* ------------- Reducers ------------- */
const initialState = {
    loading: false,
    user: undefined,
    error: undefined
  }  

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true }
      case LOGIN_SUCCESS:
        return { ...state, loading: false, user: action.user }
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.error }
      default:
        return state
    }
  }
    
  export default userReducer
import * as actions from '../actions'
 
const initState = {
  data: {}
}
 
export const reducer = (state=initState, action) => {
  switch(action.type){
    case actions.SIGNUP:
      return {
        ...state,
        payload: action.payload
      }
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case actions.SIGNUP_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}
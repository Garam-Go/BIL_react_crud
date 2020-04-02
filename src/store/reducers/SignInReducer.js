import * as actions from '../actions'
 
const initState = {
  data: {}
}
 
export const reducer = (state=initState, action) => {
  switch(action.type){
    case actions.SIGNIN:
      return {
        ...state,
        payload: action.payload
      }
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case actions.SIGNIN_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}
import * as actions from '../actions'
 
const initState = {
  data: {}
}
 
// action에서 보내준 값을 각 type값에 따라 저장
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
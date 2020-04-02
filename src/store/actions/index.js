export const LIST = 'LIST';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAIL = 'LIST_FAIL';
export const WRITE = 'WRITE';
export const WRITE_SUCCESS = 'WRITE_SUCCESS';
export const WRITE_FAIL = 'WRITE_FAIL';
export const DELETE = 'DELETE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';
export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
 //store에 dispatch를 하기위한 액션
 //dispatch 라는 함수에는 액션을 파라미터로 전달. ex) dispatch(action)
export function list(payload){
  return {
    type: LIST,
    payload
  }
}
 
export function listSuccess(data){
  return {
    type: LIST_SUCCESS,
    data
  }
}
 
export function listFail(error){
  return {
    type: LIST_FAIL,
    error
  }
}

export function write(payload){
  return {
    type: WRITE,
    payload
  }
}

export function writeSuccess(data){
  return {
    type: WRITE_SUCCESS,
    data
  }
}
 
export function writeFail(error){
  return {
    type: WRITE_FAIL,
    error
  }
}

export function deleteList(payload){
  return {
    type: DELETE,
    payload
  }
}

export function deleteListSuccess(data){
  return {
    type: DELETE_SUCCESS,
    data
  }
}
 
export function deleteListFail(error){
  return {
    type: DELETE_FAIL,
    error
  }
}

export function search(payload){
  return {
    type: SEARCH,
    payload
  }
}

export function searchSuccess(data){
  return {
    type: SEARCH_SUCCESS,
    data
  }
}
 
export function searchFail(error){
  return {
    type: SEARCH_FAIL,
    error
  }
}

export function signUp(payload){
  return {
    type: SIGNUP,
    payload
  }
}

export function signUpSuccess(data){
  return {
    type: SIGNUP_SUCCESS,
    data
  }
}
 
export function signUpFail(error){
  return {
    type: SIGNUP_FAIL,
    error
  }
}

export function signIn(payload){
  return {
    type: SIGNIN,
    payload
  }
}

export function signInSuccess(data){
  return {
    type: SIGNIN_SUCCESS,
    data
  }
}
 
export function signInFail(error){
  return {
    type: SIGNIN_FAIL,
    error
  }
}
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
 
function* fetchSignInSaga(action) {
    const formData = new FormData();
      formData.append('userId', action.payload.id)
      formData.append('password', action.payload.password)
            
      console.log(formData);

        axios.post('/login', action.payload)
          .catch((err) => {
              console.error("axios Error : " + err)
          });
        const { data } = `insert Success`;
    try {
        yield put(actions.signInSuccess(data));
    } catch (error) {
        yield put(actions.signInFail(error.response));
    }
}

export default function* watchSignIn() {
    yield takeEvery(actions.SIGNIN, fetchSignInSaga);
}
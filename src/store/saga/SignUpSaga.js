import { put, takeEvery } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";
 
function* fetchSignUpSaga(action) {
    const formData = new FormData();
      formData.append('userId', action.payload.id)
      formData.append('password', action.payload.password)
      formData.append('name', action.payload.userName)
      formData.append('birthday', action.payload.birthday)
      formData.append('gender', action.payload.gender)
      formData.append('phone', action.payload.phone)
      formData.append('email', action.payload.email)
      
      console.log(formData);
              axios.post('/listUp', action.payload)
                .catch((err) => {
                    console.error("axios Error : " + err)
                });
        const { data } = `insert Success`;
    try {
        yield put(actions.signUpSuccess(data));
    } catch (error) {
        yield put(actions.signUpFail(error.response));
    }
}

export default function* watchSignUp() {
    yield takeEvery(actions.SIGNUP, fetchSignUpSaga);
}
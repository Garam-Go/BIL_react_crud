import { spawn } from "redux-saga/effects";
import watchList from './ListSaga';
import watchWrite from './WriteSaga';
import watchDelete from './DeleteSaga';
import watchSearch from './SearchSaga';
import watchSignUp from './SignUpSaga';
import watchSignIn from './SignInSaga';
//각 이벤트를 감시하는 saga, 감지하고 적용시킨다.
export default function* rootSaga() {
  yield spawn(watchList);
  yield spawn(watchWrite);
  yield spawn(watchDelete);
  yield spawn(watchSearch);
  yield spawn(watchSignUp);
  yield spawn(watchSignIn);
}
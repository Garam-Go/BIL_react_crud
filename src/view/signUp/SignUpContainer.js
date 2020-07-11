import React, { useMemo, useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
//import styles from '../styles/Content';

import SignUpForm from './SignUpForm';
import Axios from 'axios';

//import {TableRow} from "@material-ui/core";
//import {TableCell} from "@material-ui/core";
//import {CircularProgress} from "@material-ui/core";

function SignUpContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [idCheck, setIdCheck] = useState(false);
  const [permission, setPermission] = useState(false);
  const [id, setId] = useState(false);
  const [password, setPassword] = useState(false);
  const [gender, setGender] = useState(false);

  // SignUpFrom에서 사용할 props 정리
  const signUpState = {
    showPassword,
    passCheck,
    startDate,
    users,
    idCheck,
    permission,
    id,
    password,
    gender,
  };

  console.log('signUpstate : ', signUpState);

  // 회원가입 버튼 누르면 form태그로 감싸 서버로 연동
  const formRef = useRef();

  const handleGoBack = () => {
    window.history.goBack();
  };

  const handlePermission = (e) => {
    setPermission(e.target.value);
  };

  //달력
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  // 회원가입 버튼 누르면 동작할 submit함수 useCallback
  const handleSubmit = useCallback(() => {
    // dispatch();
  }, [signUpState]);

  return (
    <form ref={formRef}>
      <SignUpForm
        handleSubmit={handleSubmit}
        handleIdCheck={setIdCheck}
        // handleMouseDownPassword={handleMouseDownPassword}
        // handleClickShowPassword={handleClickShowPassword}
        handleDateChange={handleDateChange}
        handlePermission={handlePermission}
        handleGoBack={handleGoBack}
        state={signUpState}
      />
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.signUp.data,
    error: state.signUp.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitButton: (form) => {
      dispatch({ type: actions.SIGNUP, payload: form });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);

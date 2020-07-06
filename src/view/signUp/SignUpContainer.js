import React, { useMemo, useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
//import styles from '../styles/Content';

import SignUpForm from "./SignUpForm";
import Axios from "axios";

//import {TableRow} from "@material-ui/core";
//import {TableCell} from "@material-ui/core";
//import {CircularProgress} from "@material-ui/core";

function SignUpContainer() {
  const [showPassword, setShowPassword] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [idCheck, setId] = useState(false);
  const [permission, setPermission] = useState(false);
  const [id, setId] = useState(false);
  const [password, setPassword] = useState(false);
  const [gender, setGender] = useState(false);

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

  return (
    <div>
      <SignUpForm
        handleSubmit={handleSubmit}
        handleMouseDownPassword={handleMouseDownPassword}
        handleClickShowPassword={handleClickShowPassword}
        handleDateChange={handleDateChange}
        state={state}
        handlePermission={handlePermission}
        handleGoBack={handleGoBack}
      />
    </div>
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

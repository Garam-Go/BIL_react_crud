import React from 'react';
import {connect} from 'react-redux';
 
import * as actions from '../../store/actions';
//import styles from '../styles/Content';

import SignUpForm from './SignUpForm';
import Axios from 'axios';

//import {TableRow} from "@material-ui/core";
//import {TableCell} from "@material-ui/core";
//import {CircularProgress} from "@material-ui/core";


class SignUpContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
          showPassword : false,
          passCheck : false,
          startDate: new Date(),
          users : [],
          idCheck : false,
          permission :'',
          id: '',
          password : '',
          gender : ''
        }
    };

   


    componentDidMount() {
      Axios.get('/users')
      .then(users => {
        console.log("didmount"+JSON.stringify(users));
        this.setState({
          users : users
        })
      })
      .catch((err) => {
        console.error("axios Error : " + err)
      });
    }
    
    handleGoBack = () =>{
      this.props.history.goBack();
    }

    handlePermission = (e) => {
      this.setState({
        permission : e.target.value
      })
    } 

    //아이디체크
    handleIdCheck = (e) =>{
      var id = e.target.value;
      var user = this.state.users.data;
      
      //유저테이블에서 불러온 유저데이터의 배열에서 입력한id값을 필터링
      var newArr = user.filter(function(uid){    
        return uid.userId === id;
        //배열의 유저 아이디에 입력한 id가 존재하는지를 리턴
      });  
      //아이디 체크 진행중0316
      if(newArr.length === 1 ){
        this.setState ({
          idCheck : false
        })
      }else{
        this.setState ({
          idCheck : true
        })
      }
      console.log("Filter results:",newArr);
      console.log("result : ",newArr + this.state.idCheck);
    }

    //달력
    handleDateChange = date => {
      this.setState({
        startDate: date
      });
    };

    //비밀번호 정규식 체크
    handleFocusOut = (e) =>{

      var pass = e.target.value;
      var check_pas = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

      if(check_pas.test(pass)) { 
        return this.setState({
          passCheck : true
        })
      }else{ 
        alert("비밀번호는 영어, 숫자, 특수문자 혼용으로 8~16자만 가능합니다.");
        return this.setState({
          passCheck : false
        })
      }

    };

  handleChange = (e) => { 
      this.setState({
          [e.target.id]: e.target.value
      });

      
  };

  handleClickShowPassword = (e) => {
      this.setState({
          showPassword : true
      })
    };
    
  handleMouseDownPassword = event => {
    this.setState({
        showPassword : false
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = this.state;
    console.log(form);
    this.props.submitButton(form);
    alert("회원가입 완료. 메인페이지로 이동합니다.");
    this.props.history.push("/");
  

    

    // var id = this.state.id;
    // var pass = this.state.password;
    // var gender = this.state.gender;
    // var birthday = this.state.birthday;

    // if(id === ''){
    //   alert("아이디를 입력하세요");
    //   return false;
    // }else if(this.state.idCheck=== false){
    //   alert("중복된 아이디입니다.")
    //   return false;
    // }else if(pass === ''){
    //   alert("비밀번호를 입력하세요");
    //   return false;
    // }else if(gender === ''){
    //   alert("성별을 입력하세요");
    //   return false;
    // }else if(birthday === ''){
    //   alert("생일을 입력하세요");
    //   return false;
    // }else{
    //   e.preventDefault();
    //   const form = this.state;
    //   console.log(form);
    //   this.props.submitButton(form);
    //   //this.props.history.push("/SignIn");
    // }
  }
    
   
    
    render() {
      console.log(this.state);
        return(
          <div>
            <SignUpForm 
              handleSubmit={this.handleSubmit}
              handleMouseDownPassword = {this.handleMouseDownPassword}
              handleClickShowPassword = {this.handleClickShowPassword}
              handleChange = {this.handleChange}
              handleFocusOut = {this.handleFocusOut}
              handleDateChange = {this.handleDateChange}
              state = {this.state}
              handleIdCheck = {this.handleIdCheck}
              handlePermission = {this.handlePermission}
              handleGoBack = {this.handleGoBack}
            />
          </div>
        )
    }

}

const mapStateToProps = (state) => {
  return {
      data : state.signUp.data,
      error: state.signUp.error
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
        submitButton : (form) => {
        dispatch({type: actions.SIGNUP, payload : form});
      }
    }
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SignUpContainer);
import React from 'react';
import {connect} from 'react-redux';
 
import * as actions from '../../store/actions';
import SignInForm from './SignInForm';
import Axios from 'axios';

class SignInContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
            users : [],
            userId : '',
            password : '',
            pwck : '',
            permission : '',
            logck : false
        }
    }

    
    componentDidMount() {
      // const userId = this.state.userId;

      Axios.post('/login')
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

    //아이디가 focusOut될때 DB에서 아이디에 맞는 값 검색 후 비밀번호 state에 저장 
    handleDbSearch = (e) => {
      var id = e.target.value;
      var user = this.state.users.data;
      
      //유저테이블에서 불러온 유저데이터의 배열에서 입력한id값을 필터링
      var newArr = user.filter(function(uid){    
        return uid.userId === id;
        //배열의 유저 아이디에 입력한 id가 존재하는지를 감지해서 그 데이터 리턴
      });

      //id값을 이용해 불러온 새로운 arr값이 존재하면 체크용 비밀번호를 state에 입력
      //로그인 정보가 없는것을 체크하기위해 logck값 지정
      if(newArr.length === 1){
        this.setState({
          pwck : newArr[0].password,
          logck : true
        })
        console.log("password : ",newArr[0].password);
      }else{
        this.setState({
          logck: false
        })
      }
      console.log(this.state.logck);
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
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

    handleGoBack = () =>{
      this.props.history.goBack();
    }

    handleOnLogin = () =>{
      this.props.onLogin();
    }

    handleSubmit = (e) => {
      e.preventDefault();

      const {userId, permission, password, pwck, logck} = this.state;

      console.log(pwck,password);
        
      if(pwck === password){
        
        window.sessionStorage.setItem('id',userId);
        window.sessionStorage.setItem('permission', permission);
        
        console.log("signin con : ",window.sessionStorage.getItem('id'), window.sessionStorage.getItem('permission'));
        //app.js에서 가져온 onLogin이라는 함수 실행해서 logged변수 활성화
        
        alert("로그인 성공");

        console.log("permission : ", window.sessionStorage.getItem('permission'));
        //메인화면으로 보내주기
        this.props.history.push("/");
        
        
      }else if(pwck !== password){
        //아이디가 없을경우에 logck값을 false로 지정해서 로그인체크
        if(logck === false){
          alert("사용자 정보를 찾을수 없습니다.");
        }else{
          alert("로그인 실패");
        }
        
      }
      // this.props.submitButton(form);
    }

    render() {
      console.log(this.state);
        return (
          <div>
            <SignInForm 
              state = {this.state}
              handleChange = {this.handleChange}
              handleClickShowPassword = {this.handleClickShowPassword}
              handleMouseDownPassword = {this.handleMouseDownPassword}
              handleGoBack = {this.handleGoBack}
              handleSubmit = {this.handleSubmit}
              handleDbSearch = {this.handleDbSearch}
            />
          </div>
        );
    }

}

const mapStateToProps = (state) => {
  return {
      data : state.signIn.data,
      error: state.signIn.error
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
        submitButton : (form) => {
        dispatch({type: actions.SIGNIN, payload : form});
      }
    }
  }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(SignInContainer);
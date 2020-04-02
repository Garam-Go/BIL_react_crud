import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/Header';


// function Header(props) {
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth : false
    }
  }
  
  // componentDidMount() {
  //   this.onLoad();
  // }

  // onLoad = () => {
  //   this.props.navigation.addListener('willFocus', () => {
  //     this.checkLoginStatus();
  //   });
  // };

  // checkLoginStatus = () => {
  //   if(window.sessionStorage.getItem('id')){
  //     this.setState({
  //       auth : true
  //     })
  //   }
  // };

  onload = () => {
    if(this.props.logged ){
      this.setState({
        auth : this.props.logged
      })
    }
  }

  //단순히 클릭했을때 할 작업들
  switch = () => {
    if(this.state.auth === false) {
      this.setState({
        auth : true
      })
    }else{
      this.setState({
        auth : false
      })
    }
  }

  //switch변했을때 하는 함수
  //클릭함수를 먼저 실행하고 이거 실행
  handleChange = (event) => {
    
    //1. 만약 스위치 버튼이 체크아웃되는 체인지 이벤트 발생시
    if(!event.target.checked){
      this.setState({
        auth : event.target.checked,
      });
      console.log(window.sessionStorage.getItem('id'));
      window.sessionStorage.removeItem('id');
      window.sessionStorage.removeItem('permission');
      alert('로그아웃되었습니다');
    }else{
      this.setState({
        auth : event.target.checked,
      });
      this.props.history.push('/SignIn');
    } 
  };

  handleMenu = (event) => {
    this.setState({
      anchorEl : event.currentTarget,
    })
  };

  handleClose = () => {
    this.setState({
      anchorEl : null,
    })
  };

  logout = () => {
    window.sessionStorage.removeItem('id');
    this.setState({
      auth : false,
    })
    alert("로그아웃되었습니다.");
  };

  
  render() {
    const { classes, onDrawerToggle } = this.props;
    const open = Boolean(this.state.anchorEl);

    return (
      <React.Fragment>
        <AppBar color="transparent" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={3} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item lg />
              <Grid item>
                <Link className={classes.link} href="/Doodle/Paperbase" variant="body2">
                  Go to Example
                </Link>
              </Grid>
              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={this.state.auth} onChange={this.handleChange} aria-label="login switch" />}
                    label={this.state.auth ? 'Login' : 'Logout'}
                    onClick={this.switch}
                    
                  />
                </FormGroup>
              </Grid>
              <Grid item>
              {this.state.auth && (
                <div>
                <IconButton color="inherit" className={classes.iconButtonAvatar} 
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                >
                  <Avatar alt="My Avatar" />
                </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                  <Link className={classes.link} href="/Doodle/Paperbase" variant="body2">
                    <MenuItem onClick={this.handleClose} value='menu001'>UIEXAMPLE</MenuItem>
                  </Link>
                  <Link className={classes.link} href="/Doodle/Search" variant="body2">
                    <MenuItem onClick={this.handleClose} value='menu002'>고객관리</MenuItem>
                  </Link>
                  <Link className={classes.link} href="/" variant="body2">
                    <MenuItem onClick={this.logout} value='menu003'>로그아웃</MenuItem>
                  </Link>
                </Menu>
                </div>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles)(Header));
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import { Link } from 'react-router-dom';
import styles from '../styles/Menu';
import Axios from 'axios';



class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       Menus : []
    }
  }

  componentDidMount(){
    //DB에 입력되어있는 메뉴테이블의 데이터 불러옴
    Axios.get('/menus')
    .then(menus => {
      console.log("menu didmount"+JSON.stringify(menus.data));
      this.setState({
        //state에 있는 새로운 배열에 삽입
        Menus : menus.data
      })
    })
    .catch((err) => {
      console.error("axios Error : " + err)
    });
  }

  
  //DB에서 불러온 배열을 이용해서 원하는 형식으로 배열생성
  CustomMenu = () =>{
    (this.state.Menus
    //메뉴 깊이가 1인 것들(최상위 메뉴) 조건식
    .filter(custom=> custom.menuDept === 1)
    //새로운 배열 입력
    .map(menu => (
      {
        code : menu.menuCode,
        id : menu.menuName,
        menuAC : menu.menuAC,
        //상위 메뉴에 속한 하위 메뉴 불러오기
        children : 
          //다시 state에 있는 메뉴들 불러옴
          this.state.Menus
          //필터링 = 메뉴 깊이가 2인것 + 부모 코드가 상위 메뉴의 코드와 일치하는것
          //이렇게 하면 각 상위메뉴를 부모로 갖는 하위메뉴들이 생성
          .filter(child => child.menuDept === 2 && child.parentCode === menu.menuCode)
          //하위메뉴 배열생성
          .map(child => (
            {
              code : child.menuCode,
              id : child.menuName,
              menuAC : child.menuAC
            }
          ))
      }
    ))
    )
  }

  render() {
    const { classes, ...other } = this.props;

    const memAC = window.sessionStorage.getItem('permission');

    console.log("memAC : " ,memAC);
    
    
    const menuParent = 
      this.state.Menus
      .filter(
        ((memAC==='customer'||memAC===null||memAC==='') 
        ? //삼항연산자 이면
        //로그인한 세션의 permission이 customer이거나 로그인을 하지 않은 상태의 최상위 메뉴조건식
        custom => custom.menuDept===1 && custom.menuAC==='customer'
        : //삼항연산자 아니면
        //로그인한 세션의 permission이 manager인 상태의 최상위 메뉴조건식
        custom => custom.menuDept===1 && custom.menuAC==='manager')
      )
      .map(menu => (
        {
          code : menu.menuCode,
          id : menu.menuName,
          menuAC : menu.menuAC,
          children : 
            this.state.Menus
            .filter(child => child.menuDept === 2 && child.parentCode === menu.menuCode)
            .map(child => (
              {
                code : child.menuCode,
                id : child.menuName,
                menuAC : child.menuAC
              }
            ))
        }
      ));
    
    console.log("parent :",menuParent);

    
    
  return (
    
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
          BIL CRUD
        </ListItem>
        <Link to="/" >
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Home
          </ListItemText>
        </ListItem>
        </ Link>
        
        {menuParent.map(({ id, children,menuAC }) => (
          <React.Fragment key={id}>
          <ListItem 
            className={classes.categoryHeader} 
           
          >
            <ListItemText
              classes={{
                primary: classes.categoryHeaderPrimary,
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ id:childId,  active, menuAC}) => (
            <Link 
              to={`/${id}/${childId}`} 
              className={classes.link} 
              variant="body2" 
              key={childId}
              
              >
            <ListItem
              key={childId}
              button
              className={clsx(classes.item, active && classes.itemActiveItem)}
              
              style={{display: (memAC===null||memAC==='')&&menuAC==='all'?'show':'none'}}
            >
              <ListItemIcon className={classes.itemIcon}><PeopleIcon /></ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemPrimary,
                }}
              >
                {childId}
              </ListItemText>
              </ListItem>
              </Link>
          ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}

        <Link to="/SignUp" className={classes.link}>
        <ListItem className={clsx(classes.item)}>
          <ListItemIcon className={classes.itemIcon}>
          <AccountBoxSharpIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            회원가입
          </ListItemText>
        </ListItem>
        </ Link>
      </List>
    </Drawer>
  );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/Content';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  selectStyle: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function SignUpForm(props){
    const {classes} = props;
    const styles = useStyles();
    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    
    // React.useEffect(() => {
    //   setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    return(
      <form className={props.form}>
            
          <TableContainer component={Paper} className={classes.paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <OutlinedInput
                          id="id" placeholder="ID" name="id"
                          onChange={props.handleChange}
                          onBlur={props.handleIdCheck}
                          startAdornment={<InputAdornment position="start"> <AccountCircle /> </InputAdornment>}
                      />
                      <span>{props.state.idCheck ? '아이디 사용가능' : '아이디 사용 불가'}</span>
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Password</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <OutlinedInput id="password" type={props.state.showPassword ? 'text' : 'password'}
                              onChange={props.handleChange}
                              onBlur = {props.handleFocusOut}
                                
                              endAdornment={
                              <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={props.handleClickShowPassword}
                                  onMouseDown={props.handleMouseDownPassword}
                                  edge="end"
                                  >
                                  {props.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>                                    
                              </InputAdornment>
                              }
                              labelWidth={70}
                          />
                          <span>{props.state.passCheck ===true ? '비밀번호사용가능' : '비밀번호 사용 불가'}</span>
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>UserName</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <OutlinedInput
                          id="userName" placeholder="UserName"
                          onChange={props.handleChange}
                          startAdornment={<InputAdornment position="start"> <AccountCircle /> </InputAdornment>}
                      />
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Phone</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <OutlinedInput
                          id="phone" placeholder="Phone"
                          onChange={props.handleChange}
                          startAdornment={<InputAdornment position="start"> <AccountCircle /> </InputAdornment>}
                      />
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Gender</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <OutlinedInput
                          id="gender" placeholder="Gender"
                          onChange={props.handleChange}
                          startAdornment={<InputAdornment position="start"> <AccountCircle /> </InputAdornment>}
                      />
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <OutlinedInput
                          id="email" placeholder="Email"
                          onChange={props.handleChange}
                          startAdornment={<InputAdornment position="start"> <AccountCircle /> </InputAdornment>}
                      />
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Permission</TableCell>
                    <TableCell>     
                    <FormControl className={styles.selectStyle}>
                      <InputLabel id="demo-simple-select-label">Permission</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="select"
                          value={props.state.permission}
                          onChange={props.handlePermission}
                        >
                        <MenuItem value="Customer">Customer</MenuItem>
                        <MenuItem value="Manager">Manager</MenuItem>
                        
                      </Select>
                    </FormControl>
                    </TableCell>     
                  </TableRow>
                  <TableRow>
                      <TableCell>Birthday</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">                            
                      <DatePicker
                        selected={props.state.startDate}
                        onChange={props.handleDateChange}
                      />
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow> 
                    <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <Button variant="contained" color="primary" className={classes.addUser} onClick={props.handleSubmit}>
                          회원가입
                      </Button>
                      </FormControl>
                      <FormControl className={classes.margin} variant="outlined">
                      <Button variant="contained" color="secondary" className={classes.addUser} onClick={props.handleGoBack}>
                          이전
                      </Button>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </TableContainer>

      </form>
    );
}


export default withStyles(styles)(SignUpForm);
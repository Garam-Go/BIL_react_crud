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

function SignInForm(props){
  const {classes} = props;
  return(
    <div>
        <form>
          <TableContainer component={Paper} className={classes.paper}>
              <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <OutlinedInput
                          id="userId" placeholder="ID" name="userId"
                          onChange={props.handleChange}
                          onBlur={props.handleDbSearch}
                          endAdornment={<InputAdornment position="end"> <AccountCircle /> </InputAdornment>}
                      />
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>Password</TableCell>
                      <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <OutlinedInput id="password" name="password" type={props.state.showPassword ? 'text' : 'password'}
                              onChange={props.handleChange}
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
                      </FormControl>
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <FormControl className={classes.margin} variant="outlined">
                      <Button variant="contained" color="primary" className={classes.addUser} onClick={props.handleSubmit}>
                          로그인
                      </Button>
                      </FormControl>
                      <FormControl className={classes.margin} variant="outlined">
                      <Button variant="contained" color="secondary" className={classes.addUser} onClick={props.handleGoBack}>
                          취소
                      </Button>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
        </form>
    </div>
  );
}

export default withStyles(styles)(SignInForm);
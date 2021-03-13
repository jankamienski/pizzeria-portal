import React from 'react';
import styles from './Login.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
//import TableContainer from '@material-ui/core/TableContainer';
//import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <h2>Sign in</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="standard-required" label="Nickname" defaultValue="" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </form>
      <Button variant="outlined" color="primary">Login</Button>
    </div>
  );
};

export default Login;

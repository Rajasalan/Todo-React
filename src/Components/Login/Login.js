import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginImage from '../../Assets/login_bg_img.svg'
import Logo from '../../Assets/logo.png'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStateWithLocalStorage from './LocalStore'






const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(4),

   width:'280px',
   marginBottom:'90px'

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: { 
      marginLeft:theme.spacing(14),
      width: '40ch',
  },
  submit: {
    margin: theme.spacing(8, 14, 2),
    width: '45ch',
    backgroundColor:'#444D63',
    color:'#FFFFFF',
    '&:hover': {
        backgroundColor: '#FFFF',
        color: 'black',
    },
  },
  
}));

export default function Login() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
  const [password, setpassword] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );


  const onChange = event => setValue(event.target.value);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar variant="square" alt="Rudolf" src={Logo} className={classes.avatar} />
       
          <Typography component="h1" variant="h5">
            Sign-in!
          </Typography>
          <form className={classes.form} Validate>
            <TextField className={classes.textField}
              variant="outlined"
              margin="normal"
              value={value}
              required
              id="outlined"
              label="EMAIL ID"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChange}
            />
              
           
<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel label="Helper text">PASSWORD</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            onChange={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="red"
              className={classes.submit}
            >
              Next
            </Button>
           
           
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
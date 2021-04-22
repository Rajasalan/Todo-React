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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from "react-router-dom";
import useForm from "./useForm"
import {validator} from "./Validator"





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
   marginRight:theme.spacing(6),
   marginBottom:'90px'

  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: { 
      // marginLeft:theme.spacing(14),
      marginLeft:theme.spacing(16),
      textAlign:"center",
      width: '40ch',
  },
  submit: {
    margin: theme.spacing(8, 16, 2),
    width: '40ch',
    backgroundColor:'#444D63',
    color:'#FFFFFF',
    '&:hover': {
        backgroundColor: '#FFFF',
        color: 'black',
    },
  },
  
}));
class Login extends React.Component{
  render()
  {
    const matches = useMediaQuery('(min-width:800px)');
    const classes = useStyles();
    const history = useHistory();
    const [details,setDetails]=useState({email:"",password:""});
  
    const initState = {
      email: "",
      password: "",
  
    };
  
  
  
  
    const submit = () => {
      console.log(" Submited");
    };
  
    const { handleChanges,handleClickShowPassword, handleBlur,
      errors,state,emailInput,passwordInput}=useForm({initState,callback:submit, validator})
  
     const handleSubmit=(e)=>{
      e.preventDefault();
       const{Logins}=this.props;
    
      Logins(details);
     }
    
  
    let isValidForm =
    Object.values(errors).filter(error => typeof error !== "undefined")
      .length === 0;
  
      const [values, setValues] = React.useState({
      showPassword: false,
    });
  
    /* const [value, setValue] = useStateWithLocalStorage(
      'myValueInLocalStorage'
    );
    const [passwords, setpasswords] = useStateWithLocalStorage(
      'myValueInLocalStorage'
    ); 
   */
  
  
    //const handleChanges = event => setValue(event.target.value);
  
  /*   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
   */
    /* const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
   */
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
   
    /* const routeChange = () =>{ 
     
      let path = `/Main`; 
      history.push(path);
  
    } */
  
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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
         {/*  <TextField className={classes.textField}
            variant="outlined"
            margin="normal"
            ///value={value}
            required
            id="outlined"
            label="EMAIL ID"
            name="email"
            value={emailInput}
            autoComplete="email"
            error={errors.email ? true : false}
            autoFocus
            onChange={handleChanges}
            onBlur={handleBlur}
            defaultValue={state.email}
            helperText={errors.email}
          /> */}

<TextField className={classes.textField}
            variant="outlined"
            margin="normal"
            ///value={value}
            required
            id="outlined"
            label="EMAIL ID"
            name="email"
            //value={emailInput}
            autoComplete="email"
            error={errors.email ? true : false}
            autoFocus
            onChange={e=>setDetails({...details,email:e.target.value})} value={details.name}
            onBlur={handleBlur}
            defaultValue={state.email}
            helperText={errors.email}
          />
            

            <TextField className={classes.textField}
            variant="outlined"
            margin="normal"
            ///value={value}
            required
            id="outlined"
            label="password"
            name="password"
            autoComplete="email"
            error={errors.email ? true : false}
            onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}
            autoFocus
            //onChange={handleChanges}
            onBlur={handleBlur}
            defaultValue={state.email}
            helperText={errors.email}
          />
            
            
         
{/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel label="Helper text">PASSWORD</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          //value={values.password}
          value={passwordInput}
         // onChange={handleChange('password')}
          //onChange={passwords}
           //error={errors.password ? true : false}
           name="password"
            helperText={errors.password}
            onBlur={handleBlur}
            required
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
      </FormControl> */}
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="red"
            value="Logins"
            className={classes.submit}
           // onClick={routeChange}
            //disabled={!isValidForm}
          >
            Next

          </Button> 
        
         
        </form>
      </div>
    </Grid>
  </Grid>
    )
  }
}
export default Login
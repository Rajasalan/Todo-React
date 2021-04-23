import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import clsx from 'clsx'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import LoginImage from '../../Assets/login_img.svg'
import Logo from '../../Assets/logo.png'
import { useHistory } from 'react-router-dom'
import adminUser from './AdminUser'


/**
 * Login displays login page
 *
 * @returns   storeLoginCredentials // stores user detail email id and password
 * @method handleSubmit // used to handle form details
 */


const Login = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${LoginImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
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
      width: '280px',
      marginRight: theme.spacing(6),
      marginBottom: '90px',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(16),
      textAlign: 'center',
      width: '40ch',
    },
    submit: {
      margin: theme.spacing(8, 16, 2),
      width: '40ch',
      backgroundColor: '#444D63',
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: '#FFFF',
        color: 'black',
      },
    },
  }))

  const classes = useStyles()
  const [details, setDetails] = useState({ email: '', password: '' })
  const [show, setShow] = useState(false)
  const [user, setUser] = useState({ name: '', email: '', password: '', userType: '' })
  const [values, setValues] = React.useState({ passwords: '', showPassword: false })
  const history = useHistory()

  const storeLoginCredentials = details => {
    console.log(details)
    let loginSuccess = false
    adminUser.map(value => {
      if (value.email === details.email && value.password === details.password) {
        setUser({
          name: details.name,
          email: details.email,
          password: details.password,
          userType: '',
        })
        loginSuccess = true
        let path = `/Main`
        history.push(path, { email: details.email, password: details.password })
      }
    })
    setShow(true)
  }

  const submit = () => {
    console.log(' Submited')
  }

  function form() {
    console.log('No errors, submit callback called!')
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleSubmit = e => {
    e.preventDefault()
    storeLoginCredentials(details)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <Avatar variant="square" alt="Rudolf" src={Logo} className={classes.avatar} />
          <Typography component="h1" variant="h5">
            Sign-in!
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="normal"
              type="email"
              name="email"
              required
              id="outlined"
              label="EMAIL ID"
              autoComplete="email"
              autoFocus
              onChange={e => setDetails({ ...details, email: e.target.value })}
            />

            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel label="Helper text">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={e => setDetails({ ...details, password: e.target.value })}
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
            <div style={{ display: show ? 'block' : 'none' }}>
              <p style={{ color: 'red', paddingLeft: '170px' }}>Username and password don't match</p>
            </div>
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
  )
}

export default Login

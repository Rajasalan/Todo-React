import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Main from './Components/Main';
import Login from './Components/Login/Login'


function App() {

  
  return (

    <React.Fragment>
    <CssBaseline />
   
      <Typography component="div" style={{ backgroundColor: 'red', height: '100vh' }} > 
     {/*  <Main/> */}
      <Login/>
      </Typography>
  
   </React.Fragment>
    
  );
}

export default App;

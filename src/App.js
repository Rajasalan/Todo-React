

 import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { BrowserRouter} from "react-router-dom";
import { withRouter, Route, Switch } from 'react-router';
import Main from './Components/Main';
import Login from './Components/Login/Login';






 function App() {

  
  return (

    <React.Fragment>
    <CssBaseline />
   
     
      <BrowserRouter>
      <Switch>
                
                <Route exact path="/Main" component={withRouter (Main)}  />
                <Route path="/Login" component={withRouter(Login)} />
              
            </Switch>
            </BrowserRouter>
     {/*  <Main/>
       <Login/> */}
   
  
   </React.Fragment>
    
  );
}

export default App;   

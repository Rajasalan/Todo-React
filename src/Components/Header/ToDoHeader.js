import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LogOut from '../LogOut/LogOut'
import TaskButtons from './TaskButtons';
import useStyles from "../MainCss";

/**
 * ToDoHeader component shows labels, category and logout
 *  
 * @returns  TaskButtons
 * @returns  LogOut
 */

export default function ToDoHeader() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Container maxWidth="sm">
    <Typography component="div" className={classes.HeaderBackground}  >
    <Box className={classes.divToDoList} style={{marginBottom:'70px',marginTop:'50px'}}
     display="flex" justifyContent="space-between">
    <Box >
    To-Do List
    </Box>
    <Box className={classes.divStep}>
    <LogOut/>
    </Box>
    </Box>
    <TaskButtons style={{marginRight:'10px'}} />
    </Typography>
    </Container>    
  </React.Fragment>
    
  );
}


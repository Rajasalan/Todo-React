import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

/**
 * Logout used to return to login page from todolist page

 */

function LogOut() {
  const useStyles = makeStyles((theme) => ({
 logout:{
  width: "20ch",
  backgroundColor: "#F77062",
  "&:hover": {
    backgroundColor: "#F77062",
    color: "#FFFFFF",
  },
 }
  }));

  const classes = useStyles();
    const history = useHistory();
     const routeChange = () =>{   
      let path = `/logout`; 
      history.push(path);
    } 
    return (
        <div>
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="red"
            className={classes.logout}
           onClick={routeChange}>
            LogOut
          </Button>  
        </div>
    )
}
export default LogOut

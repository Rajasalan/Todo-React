import React from 'react';
import useStyles from "./MainCss";
import { Card } from '@material-ui/core';
import Link from '@material-ui/core/Link';

/**
 * ChangeStatus this component is used to view all the task status(eg: all, ongoing, completed)
 *  
 * @method viewTasks
 */

export default function ChangeStatus(props){

    const classes = useStyles();
    const StatusItems=["ALL","ONGOING","COMPLETED"];
    const viewTasks=(Status)=>{
        var  StatusElems=document.getElementById(Status.Item).parentElement.getElementsByTagName('a');
        for(var i=0;i<StatusElems.length;i++)
        {
            if(StatusElems[i].id===Status.Item)
            StatusElems[i].className=classes.anchorSelected
            else
            StatusElems[i].className=classes.anchorMenu
        }

        props.StatusTasks(Status.Item) 
    }
    return (
        <React.Fragment>
        <Card className={classes.root}>
        <div className={classes.DivTasksLeft}>{props.TasksLeft}</div>
        <div className={classes.DivChangeStatus}>
            {
            StatusItems.map((Item,index)=>
            {
                if(index===0)
                { return(
                <Link className={classes.anchorSelected} id={Item} onClick={()=>viewTasks({Item})} >
                {Item}
                </Link>
                )}
                else
                {return (
                 <Link className={classes.anchorMenu} id={Item} onClick={()=>viewTasks({Item})}>
                    {Item}
                  </Link> 
                )}    
            }
            )
            }
        </div>
        </Card>
        </React.Fragment>
    ) 

}
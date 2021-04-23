import React,{useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { FormControl} from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import Divider from "@material-ui/core/Divider";
import Header from "./Header/ToDoHeader";
import TodoList from "./List/TodoList";
import * as todos from '../Models/todo';
import Category from "../Models/Category";
import useStyles from "./MainCss";
import MenuEnter from "./MenuEnter";
import MenuLeave from "./MenuLeave";
import AppDialogBox from "./Dialogs/DialogBox";
import ChangeStatus from "./ChangeStatus";
import Container from "@material-ui/core/Container";


/**
 * Main component is the landing page
 *
 * @returns Header
 * @returns TodoList
 * @returns ChangeStatus
 * @returns AppDialogBox
 * {props.Title} Title of the dialog box
 *  {props.children} adds new category  and the color code text field
 * {props.AddButton}  add category button
 * {props.HandleClose} close button in the dialog box
 */

export default function Main(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState('')

  let todo;
  console.log(props)
  if (props.location.state.email === "user1@rudolf.com"){
    todo = todos.todo_user1;
  } else if (props.location.state.email === "user2@rudolf.com"){
    todo = todos.todo_user2;
  }
  else if (props.location.state.email === "user3@rudolf.com"){
    todo = todos.todo_user3;
  }

  const [todoTasks, setTasks] = React.useState(todo);
  const [Taskstatus, setTaskstatus] = React.useState("ALL");

  let taskLeft = "";

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * statusTasks is used to check the status of the task
   *
   * @Method statusTasks
   */

  const statusTasks = (status) => {
    let viewTodoTasks = [];
    if (status === "ALL") viewTodoTasks = todo;
    else if (status === "ONGOING") {
      todo.map((Item) => {
      if (Item.completed === false) viewTodoTasks.push(Item);
      });
    } else if (status === "COMPLETED") {
      todo.map((Item) => {
        if (Item.completed === true) viewTodoTasks.push(Item);
      });
    }
    setTasks(viewTodoTasks);
  };

  /**
   * UpdateStatus is used to update the status of the task from "ongoing" to "complete"
   *
   * @Method UpdateStatus
   */

  const UpdateStatus = (ItemID) => {
    if (window.confirm("Are you sure to update task as complete")) {
      todo.map((Item) => {
        if (Item.id === ItemID) Item.completed = true;
      });

      if (Taskstatus === "ALL") setTaskstatus("COMPLETED");
      else setTaskstatus("ALL");
    }
  };

  /**
   * DeleteToDo is used to delete particular task
   *
   * @Method DeleteToDo
   */
  const DeleteToDo = (ItemID) => {
    if (window.confirm("Are you sure want to delete a task")) {
      for (var i = 0; i < todo.length; i++) {
        if (todo[i].id === ItemID) {
          todo.splice(i, 1);
        }
      }
      if (Taskstatus === "ALL") setTaskstatus("COMPLETED");
      else setTaskstatus("ALL");
    }
  };

  /* Counts number of ongoing task left*/
  let taskLeftCount = 0;
  todo.map((Item) => {
    if (Item.completed === false) taskLeftCount++;
  });
  taskLeft = taskLeftCount + " tasks left";

  /**
   * addTask is used to add new task
   *
   * @Method addTask
   */
  const addTask = (Item) => {
    var todoCount = todo.length + 1;
    const metadata = {
      id: todoCount,
      name:newTask,
      completed: false,
      category: Item.category,
      Color: Item.Color,
    };

    todo.push(metadata);
    setNewTask("")
    setOpen(false);
  };

  const buttonItems = Category.map((Item) => (
    <React.Fragment>
      <tr style={{ paddingBottom: "10px" }}>
        <td>
          <div
            className={classes.ButtonBackground}
            style={{ backgroundColor: Item.Color }}
          ></div>
          <div
            className={classes.CategoryMenu}
            menuColor={Item.Color}
            onMouseEnter={MenuEnter}
            onMouseLeave={MenuLeave}
            onClick={() => addTask(Item)}
            id={Item.Name}
          >
            <span>{Item.Name}</span>
          </div>
        </td>
      </tr>
    </React.Fragment>
  ));

  const AddTaskItem = (
    <React.Fragment>
      <div className={classes.DivChkBox} id="divChkBox">
<Checkbox
        checked={open}
        onChange={() => setOpen(true)}
      />
      </div>
      <div className={classes.DivAddTask}>
        <TextField
          id="txtAddTask"
          style={{ marginLeft:'20px',width:'80%'}}
          label="Click checkbox to select category"
          onChange={e => setNewTask(e.target.value)}
          value={newTask}
        />
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Header /> 
      <Divider />
      <Container maxWidth="sm" style={{ paddingTop: "5px" }}>
       {AddTaskItem} 
         <TodoList
          Items={todoTasks}
          onStatusChange={UpdateStatus}
          onDelete={DeleteToDo}
        /> 
        <ChangeStatus
          TasksLeft={taskLeft}
          StatusTasks={statusTasks}
        ></ChangeStatus>
      </Container>
      <AppDialogBox
        Title="Add New Task"
        Open={open}
        Margin={classes.margin}
        HandleClose={handleClose}
        AddButton=""
      >
        <form className={classes.form} noValidate>
          <FormControl className={classes.formControl}>
            <table>{buttonItems}</table>
          </FormControl>
        </form>
      </AppDialogBox>
    </React.Fragment>
  );
}

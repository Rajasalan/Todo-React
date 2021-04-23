import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import AddIcon from '@material-ui/icons/Add'
import Box from '@material-ui/core/Box'
import AppDialogBox from '../Dialogs/DialogBox'
import Category from '../../Models/Category'
import MenuEnter from '../MenuEnter'
import MenuLeave from '../MenuLeave'
import useStyles from '../MainCss'

/**
 * TaskButtons displays all category and colors
 *
 * @returns   AppDialogBox
 * @method addTaskButton
 * @method addCategory
 * @method buttonItems // This  function displays all category name
 * @method colorItems  // This  function displays different label color in dialog box
 * onClick={addCategory} this function is used to add new category and the color code when Add category button is clicked
 */

export default function TaskButtons() {
  const classes = useStyles() /** Main css */
  const [open, setOpen] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [newColor, setNewColor] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addTaskButton = () => {
    return (
      <Button className={classes.margin} onClick={addCategory}>
        Add Category
      </Button>
    )
  }

  const addCategory = () => {
    var metadata = {
      Name: newTask,
      Color: newColor,
    }
    Category.push(metadata)
    setOpen(false)
  }

  const buttonItems = Category.map(Item => (
    <td style={{ width: '25%' }} menucolor={Item.Color}>
      <div className={classes.ButtonBackground} style={{ backgroundColor: Item.Color }}></div>
      <div
        className={classes.CategoryMenu}
        menuColor={Item.Color}
        onMouseEnter={MenuEnter}
        onMouseLeave={MenuLeave}
        onClick={handleClickOpen}
        id={Item.Name}
      >
        <span>{Item.Name}</span>
      </div>
    </td>
  ))

  const colorItems = Category.map(Item => (
    <td>
      <span className={classes.TaskMenuColor} style={{ backgroundColor: Item.Color }}>
        {' '}
      </span>
    </td>
  ))
  return (
    <div>
      <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" alignItem="space-evenly">
          {buttonItems}
          <AddIcon onClick={handleClickOpen} />
        </Box>
      </div>
      <AppDialogBox
        Title="Category"
        Open={open}
        Margin={classes.margin}
        HandleClose={handleClose}
        AddButton={addTaskButton()}
      >
        <form className={classes.form} noValidate>
          <FormControl className={classes.formControl}>
            <TextField id="txtCategory" onChange={e => setNewTask(e.target.value)} label="Category" />
            <TextField id="txtColor" onChange={e => setNewColor(e.target.value)} label="Color Code" />
            <table width="60%">
              <tr>{colorItems}</tr>
            </table>
          </FormControl>
        </form>
      </AppDialogBox>
    </div>
  )
}

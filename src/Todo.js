import { Button, Input, List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import './Todo.css'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


function Todo(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);
    const [input, setInput] = useState('');

   
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Edit your Todo</h2>

                    <form>
                        <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                        <Button color="primary" type="submit" onClick={updateTodo}>edit</Button>
                    </form>
                </div>
            </Modal>
            <List >
                <ListItem className='Todo'>
                    <ListItemText primary={props.todo.todo} secondary="Deadline ⏰"/>
                    <EditIcon onClick={e => setOpen(true)}/>
                    <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
                </ListItem> 
            </List>
        </div>
    )
}

export default Todo;

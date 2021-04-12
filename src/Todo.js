import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.text} secondary="Deadline ⏰"/>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo;

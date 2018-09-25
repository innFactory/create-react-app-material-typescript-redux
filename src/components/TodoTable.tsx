import { Checkbox, createStyles, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, Theme, WithStyles, withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import * as React from 'react';
import * as TodoActions from '../actions/todo';
import { Todo } from '../model/model';

export namespace TodoTable {
    export interface Props extends WithStyles<typeof styles> {
        todoList: Todo[];
        actions: typeof TodoActions;
    }
}

class TodoTable extends React.Component<TodoTable.Props> {

    onRowClick(todo: Todo) {
        if (todo.completed) {
            this.props.actions.uncompleteTodo(todo.id);
        } else {
            this.props.actions.completeTodo(todo.id);
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="dense">Completed</TableCell>
                            <TableCell padding="dense">Text</TableCell>
                            <TableCell padding="dense">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.todoList.map(n => {
                            return (
                                <TableRow
                                    key={n.id}
                                    hover
                                    onClick={event => this.onRowClick(n)}
                                >
                                    <TableCell padding="dense">
                                        <Checkbox checked={n.completed} />
                                    </TableCell>
                                    <TableCell padding="dense">{n.text}</TableCell>
                                    <TableCell padding="dense">
                                        <IconButton
                                            aria-label="Delete"
                                            color="default"
                                            onClick={() => this.props.actions.deleteTodo(n.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    paper: {
        width: '100%',
        minWidth: 260,
        display: 'inline-block'
    },
    table: {
        width: '100%'
    },
});

export default withStyles(styles)(TodoTable);
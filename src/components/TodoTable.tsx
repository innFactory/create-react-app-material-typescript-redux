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

    constructor(props?: (TodoTable.Props), context?: any) {
        super(props as any, context);
    }

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
                            <TableCell>Completed</TableCell>
                            <TableCell>Text</TableCell>
                            <TableCell>Delete</TableCell>
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
                                    <TableCell padding="checkbox">
                                        <Checkbox checked={n.completed} />
                                    </TableCell>
                                    <TableCell>{n.text}</TableCell>
                                    <TableCell padding="checkbox">
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
        maxWidth: 1000,
        minWidth: 1000,
        display: 'inline-block'
    },
    table: {
        maxWidth: 1000,
    },
});

export default withStyles(styles)<TodoTable.Props>(TodoTable);
import * as React from 'react';
import { Todo } from '../model/model';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';

export namespace TodoTable {
    export interface Props {
        todoList: Todo[];
    }
}

class TodoTable extends React.Component<WithStyles & TodoTable.Props> {

    constructor(props?: (WithStyles & TodoTable.Props), context?: any) {
        super(props as any, context);
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>ID</TableCell>
                            <TableCell>Text</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.todoList.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell numeric>{n.id}</TableCell>
                                    <TableCell>{n.text}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const styles: StyleRulesCallback = theme => ({
    paper: {
        maxWidth: 700,
        minWidth: 700,
        display: 'inline-block'
    },
    table: {
        maxWidth: 700,
    },
});

export default withStyles(styles)<TodoTable.Props>(TodoTable);
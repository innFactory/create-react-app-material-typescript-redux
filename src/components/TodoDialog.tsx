import { Button, Dialog, DialogActions, DialogTitle, StyleRulesCallback, TextField, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import * as TodoActions from '../actions/todo';

export namespace TodoDialog {
    export interface Props {
        actions: typeof TodoActions;
        open: boolean;
        onClose: Function;
    }

    export interface State {
        newTodoText: string;
    }
}

class TodoDialog extends React.Component<WithStyles & TodoDialog.Props> {

    state = {
        newTodoText: '',
    };

    static getDerivedStateFromProps(nextProps: Readonly<TodoDialog.Props>, prevState: Readonly<TodoDialog.State>) {
        // return new state
        return { open: nextProps.open, newTodoText: '' };
    }

    handleClose = () => {
        this.props.actions.addTodo({ id: Math.random(), completed: false, text: this.state.newTodoText });
        this.props.onClose();
    };

    handleChange = (name: string) => (event: any) => {
        this.setState({
            newTodoText: event.target.value,
        });
    };

    render() {

        return (
            <Dialog open={this.props.open} onClose={this.handleClose}>
                <DialogTitle>Add a new TODO</DialogTitle>
                <TextField
                    id="multiline-flexible"
                    multiline
                    value={this.state.newTodoText}
                    onChange={this.handleChange('newTodoText')}
                    className={this.props.classes.textField}
                />
                <DialogActions>
                    <Button color="primary" onClick={this.handleClose}>
                        OK
            </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const styles: StyleRulesCallback = theme => ({
    textField: {
        width: 400,
        margin: 20
    }
});

export default withStyles(styles)<TodoDialog.Props>(TodoDialog);
import { Button, createStyles, Dialog, DialogActions, DialogTitle, TextField, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import * as TodoActions from '../actions/todo';

export namespace TodoDialog {
    export interface Props extends WithStyles<typeof styles> {
        actions: typeof TodoActions;
        open: boolean;
        onClose: () => void;
    }

    export interface State {
        newTodoText: string;
    }
}

class TodoDialog extends React.Component<TodoDialog.Props> {

    state = {
        newTodoText: '',
    };

    static getDerivedStateFromProps(nextProps: Readonly<TodoDialog.Props>, prevState: Readonly<TodoDialog.State>) {
        // return new state
        return { open: nextProps.open, newTodoText: prevState.newTodoText };
    }

    handleClose = () => {
        this.props.actions.addTodo({ id: Math.random(), completed: false, text: this.state.newTodoText });
        this.props.onClose();

        // reset todo text if user reopens the dialog
        this.setState({ newTodoText: '' });
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

const styles = (theme: Theme) => createStyles({
    textField: {
        width: '80%',
        margin: 20
    }
});

export default withStyles(styles)<TodoDialog.Props>(TodoDialog);
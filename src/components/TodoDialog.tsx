import * as React from 'react';
import Dialog, {
    DialogTitle,
    DialogActions,
} from 'material-ui/Dialog';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import * as TodoActions from '../actions/todo';
import TextField from 'material-ui/TextField/TextField';
import Button from 'material-ui/Button/Button';

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

    componentWillReceiveProps(nextProps: Readonly<TodoDialog.Props>) {
        this.setState({ open: nextProps.open, newTodoText: '' });
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
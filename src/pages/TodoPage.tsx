import * as React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import TodoTable from '../components';
import { RootState } from '../reducers/index';
import * as TodoActions from '../actions/todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Todo } from '../model/model';
import { RouteComponentProps } from 'react-router';
import Dialog, {
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField/TextField';
import Grid from 'material-ui/Grid';

export namespace TodoPage {
  export interface Props extends RouteComponentProps<void> {
    todoList: Todo[];
    actions: typeof TodoActions;
  }

  export interface State {
    open: boolean;
    newTodoText: string;
  }
}

class TodoPage extends React.Component<WithStyles & TodoPage.Props, TodoPage.State> {
  state = {
    open: false,
    newTodoText: '',
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
    this.props.actions.addTodo({ id: Math.random(), completed: false, text: this.state.newTodoText });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleChange = (name: string) => (event: any) => {
    this.setState({
      newTodoText: event.target.value,
    });
  };

  render() {
    return (
      <Grid
        container
        className={this.props.classes.root}
        alignItems={'flex-start'}
        justify={'flex-start'}
      >
        <Dialog open={this.state.open} onClose={this.handleClose}>
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
        <Grid item xs={1}>
          <Typography type="display1" gutterBottom>
            Todo List
        </Typography>
        </Grid>
        <Grid item xs={1}>
          <Button raised color="secondary" onClick={this.handleClick}>
            Add Todo
        </Button>
        </Grid>
        <Grid item xs={12}>
          <TodoTable todoList={this.props.todoList} />
        </Grid>
      </Grid>
    );
  }
}

const styles: StyleRulesCallback = theme => ({
  root: {
    padding: theme.spacing.unit * 10,
  },

  textField: {
    width: 400,
    margin: 20
  }
});

function mapStateToProps(state: RootState) {
  return {
    todoList: state.todoList
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch)
  };
}

export default (withStyles(styles)<{}>(connect(mapStateToProps, mapDispatchToProps)(TodoPage)));

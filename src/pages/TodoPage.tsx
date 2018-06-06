import { Button, Grid, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todo';
import TodoTable from '../components';
import TodoDialog from '../components/TodoDialog';
import { Todo } from '../model/model';
import { RootState } from '../reducers/index';

export namespace TodoPage {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    todoList: Todo[];
    actions: typeof TodoActions;
  }

  export interface State {
    open: boolean;
  }
}

class TodoPage extends React.Component<TodoPage.Props, TodoPage.State> {
  state = {
    open: false,
  };

  render() {
    const { classes, actions, todoList } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        alignItems={'flex-start'}
        justify={'flex-start'}
      >
        <TodoDialog
          actions={actions}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        />
        <Grid item xs={2}>
          <Typography variant="display1" gutterBottom>
            Todo List
        </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="raised" color="secondary" onClick={this.handleAddTodo}>
            Add Todo
        </Button>
        </Grid>
        <Grid item xs={12}>
          <TodoTable todoList={todoList} actions={actions} />
        </Grid>
      </Grid>
    );
  }

  handleAddTodo = () => this.setState({ open: true });

}

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 10,
  },
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

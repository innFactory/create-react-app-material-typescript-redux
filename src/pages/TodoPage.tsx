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
import Grid from 'material-ui/Grid';
import TodoDialog from '../components/TodoDialog';

export namespace TodoPage {
  export interface Props extends RouteComponentProps<void> {
    todoList: Todo[];
    actions: typeof TodoActions;
  }

  export interface State {
    open: boolean;
  }
}

class TodoPage extends React.Component<WithStyles & TodoPage.Props, TodoPage.State> {
  state = {
    open: false,
  };

  render() {
    return (
      <Grid
        container
        className={this.props.classes.root}
        alignItems={'flex-start'}
        justify={'flex-start'}
      >
        <TodoDialog
          actions={this.props.actions}
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        />
        <Grid item xs={2}>
          <Typography variant="display1" gutterBottom>
            Todo List
        </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="raised" color="secondary" onClick={() => this.setState({ open: true })}>
            Add Todo
        </Button>
        </Grid>
        <Grid item xs={12}>
          <TodoTable todoList={this.props.todoList} actions={this.props.actions} />
        </Grid>
      </Grid>
    );
  }
}

const styles: StyleRulesCallback = theme => ({
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

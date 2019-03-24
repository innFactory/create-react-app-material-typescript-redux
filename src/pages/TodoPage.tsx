import { Button, Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todo';
import TodoTable from '../components';
import TodoDialog from '../components/TodoDialog';
import { Todo } from '../model/model';
import { RootState } from '../reducers/index';

interface Props extends RouteComponentProps<void> {
  todoList: Todo[];
  actions: typeof TodoActions;
}

function TodoPage(props: Props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { actions, todoList } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTodo = () => {
    setOpen(true);
  };

  return (
    <Grid
      container
      className={classes.root}
    >
      <TodoDialog
        actions={actions}
        open={open}
        onClose={handleClose}
      />
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Todo List
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.buttonContainer}>
          <Button className={classes.button} variant="contained" color="secondary" onClick={handleAddTodo}>
            Add Todo
        </Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <TodoTable todoList={todoList} actions={actions} />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 50,
      paddingLeft: 15,
      paddingRight: 15,
    },

  },

  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },

  button: {
    marginBottom: 15,
  },
}));

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);

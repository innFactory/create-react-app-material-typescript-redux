import * as React from 'react';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import { RootState } from '../reducers';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Todo } from '../model/model';

export namespace HomePage {
  export interface Props extends RouteComponentProps<void> {
    todoList: Todo[];
  }
}

class HomePage extends React.Component<WithStyles & HomePage.Props> {

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="display1" gutterBottom>
          You have {this.props.todoList.length} TODOs in your list!
        </Typography>
      </div>
    );
  }
}

const styles: StyleRulesCallback = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function mapStateToProps(state: RootState) {
  return {
    todoList: state.todoList
  };
}

export default (withStyles(styles)<{}>(connect(mapStateToProps)(HomePage)));

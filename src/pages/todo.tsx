import * as React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';

const styles: StyleRulesCallback = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    height: '100%'
  },
});

type State = {
  open: boolean;
};

class Todo extends React.Component<WithStyles, State> {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography type="display1" gutterBottom>
          Todo
        </Typography>
        <Button raised color="secondary" onClick={this.handleClick}>
            Add Todo
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)<{}>(Todo);

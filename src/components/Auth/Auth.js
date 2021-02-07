import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import SignupForm from './Signup/SignupForm';
import LoginForm from './Login/LoginForm';

const styles = {
  container: {
    margin: 'var(--size-s) 0',
    paddingTop: 'var(--size-xxs)',
    height: '115vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  toggleLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  render() {
    const { routerProps, isLoggedIn, classes } = this.props;
    const { isLoading } = this.state;
    return (
      <Paper elevation={3} className={classes.container}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div className={classes.authContainer}>
            <SignupForm
              {...routerProps}
              isLoggedIn={isLoggedIn}
              toggleLoading={this.toggleLoading}
            />
            <Divider />
            <LoginForm
              {...routerProps}
              isLoggedIn={isLoggedIn}
              toggleLoading={this.toggleLoading}
            />
          </div>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(Auth);

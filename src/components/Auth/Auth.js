import React, { Component } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import withStyles from '@mui/styles/withStyles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

import SignupForm from './Signup/SignupForm';
import LoginForm from './Login/LoginForm';

import styles from './AuthStyles';

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
    const { routerProps, isLoggedIn } = this.props;
    const { classes } = this.props;
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

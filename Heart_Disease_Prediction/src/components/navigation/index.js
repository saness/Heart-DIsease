import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';
import Auth from './AuthNavigator';
import App from './AppNavigator';


class AuthenticationHandler extends React.Component{

  constructor(props) {
    super(props);
  }
  render() {
    this.switchNavigation = createSwitchNavigator(
      {
        App,
        Auth
      },
      {
        initialRouteName: this.props.loggedIn?'App':'Auth',
      },
    );
    const Container = createAppContainer(this.switchNavigation);
    return (
      <Container/>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,

});

export default connect(mapStateToProps, null)(AuthenticationHandler);
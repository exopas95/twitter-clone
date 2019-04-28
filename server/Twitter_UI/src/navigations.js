import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createTabNavigator
} from "react-navigation";
import { connect } from "react-redux";

import HomeScreen from "./Screens/HomeScreen";

const AppMainNav = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

class AppNavigator extends Component {
  render() {
    const nav = {
      dispatch: this.props.dispatch,
      state: this.props.nav
    };
    return <AppMainNav navigation={nav} />;
  }
}
/*
const AppContainer = createAppContainer(AppNavigator);

class AppNavigation extends Component {
  render() {
    <AppContainer screenProps={this.props} />;
  }
}
*/
export default connect(state => ({
  nav: state.nav
}))(AppNavigator);

export const router = AppMainNav.router;

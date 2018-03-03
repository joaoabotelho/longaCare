import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import MainMenu from './components/MainMenu';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="login" component={LoginForm} hideNavBar/>
        <Scene key="signup" component={SignupForm} hideNavBar/>
        <Scene initial key="mainMenu" component={MainMenu} hideNavBar/>
      </Scene>
    </Router>
  );
};

var styles = {
}

export default RouterComponent;

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import MainMenu from './components/MainMenu';
import PatientInfo from './components/PatientInfo';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="login" component={LoginForm} hideNavBar/>
        <Scene key="signup" component={SignupForm} hideNavBar/>
        <Scene initial key="mainMenu" component={MainMenu} hideNavBar/>
        <Scene key="patientInfo" component={PatientInfo} hideNavBar/>
      </Scene>
    </Router>
  );
};

var styles = {
}

export default RouterComponent;

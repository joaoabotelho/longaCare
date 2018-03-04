import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Dimensions, TouchableOpacity } from 'react-native';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import MainMenu from './components/MainMenu';
import PatientInfo from './components/PatientInfo';
import MIIcon from 'react-native-vector-icons/MaterialIcons';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene initial key="login" component={LoginForm} hideNavBar/>
        <Scene key="signup" component={SignupForm} hideNavBar/>
        <Scene key="mainMenu" component={MainMenu} hideNavBar/>
        <Scene key="patientInfo" component={PatientInfo}
          title="Patient"
          renderBackButton={() =>
              <TouchableOpacity onPress={() => Actions.pop()}>
                <MIIcon
                  name="keyboard-arrow-left"
                  size={55}
                  color="blue"
                  style={{bottom: 8}}/>
              </TouchableOpacity>
          }
          back/>
      </Scene>
    </Router>
  );
};

var styles = {
  barStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: Dimensions.get('window').height*0.91,
    width: Dimensions.get('window').width,
  }
}

export default RouterComponent;

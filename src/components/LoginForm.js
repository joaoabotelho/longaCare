import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Background, Logo, Button, Card, CardSection, InputSection, Input, LogButton } from './common';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, loginUser } from '../actions';

var s = require('../assets/style');

class LoginForm extends Component {
  usernameChanged(value) {
    this.props.usernameChanged(value);
  }

  passwordChanged(value) {
    this.props.passwordChanged(value);
  }

  onButtonSubmit() {
    console.log('Submitted: ', `${this.props.username} ${this.props.password}`);
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
  }

  renderError(){
    if (this.props.error) {
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
          }}
        >Sorry authentication failed!</Text>
      );
    }
    return null;
  }

  renderButton() {
    if (this.props.spinner) {
      return (
        <ActivityIndicator
          style={{ height: 80 }}
          size="large"
        />
      );
    }

    if(this.props.mainMenuReady && this.props.auth_token != ''){
      return( Actions.mainMenu());
    }

    return (
      <Button onPress={this.onButtonSubmit.bind(this)} textStyle={styles.signInButtonTextStyle} buttonStyle={styles.signInButtonStyle}>
        Sign in
      </Button>
    );
  }

  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#FAFAFA',}}>
        <Logo/>
        <Card style = {{position: 'absolute', bottom: '25%', width: '100%'}}>
          <InputSection>
            <Input
              onChangeText={this.usernameChanged.bind(this)}
              placeholder="Username"
              value={this.props.username}
            />
          </InputSection>
          <InputSection>
            <Input
              onChangeText={this.passwordChanged.bind(this)}
              placeholder="Password"
              secureTextEntry
              value={this.props.password}
            />
          </InputSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>
          {this.renderError()}
          <LogButton text="Don't have an account?" buttonText=" Signup" onPress={Actions.signup}/>
        </Card>
      </View>
    );
  }
}

const styles = {
  signInButtonTextStyle: {
    color: '#ffffff',
    padding: 8,
    textAlign: 'center',
    fontFamily: "Merriweather-Light",
  },

  signInButtonStyle: {
    backgroundColor: '#1A8FE3',
    padding: 8,
    width: '100%',
    borderRadius: 4,
    position: 'relative',
  },
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    error: state.auth.errorFlag,
    spinner: state.auth.spinner,
    auth_token: state.auth.auth_token,
    mainMenuReady: state.auth.mainMenuReady
  };
};

export default connect(mapStateToProps, { usernameChanged, passwordChanged, loginUser } )(LoginForm);

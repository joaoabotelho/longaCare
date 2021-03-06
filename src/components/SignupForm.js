import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Background, Button, Card, CardSection, InputSection, Input, LogButton } from './common';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, createUser } from '../actions';

class SignupForm extends Component {
  usernameChanged(value) {
    this.props.usernameChanged(value);
  }

  passwordChanged(value) {
    this.props.passwordChanged(value);
  }

  onButtonSubmit() {
    console.log('Submitted: ', `${this.props.username} ${this.props.password}`);
    const { username, password } = this.props;
    this.props.createUser({ username, password });
  }

  renderError(){
    if (this.props.errorFlag) {
      console.log('Error: ', `${this.props.error}`);
      return (
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
          }}
        >{this.props.error}</Text>
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
    return (
      <Button onPress={this.onButtonSubmit.bind(this)} textStyle={styles.signInButtonTextStyle} buttonStyle={styles.signInButtonStyle}>
        Create Account
      </Button>
    );
  }


  render() {
    return (
      <View style = {{flex: 1, backgroundColor: '#FAFAFA',}}>
        <View style={styles.titleContainerStyle}>
          <Text style={styles.titleStyle}>New</Text>
          <Text style={styles.titleStyle}>Account</Text>
        </View>
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
              secureTextEntry
              placeholder="Password"
              value={this.props.password}
            />
          </InputSection>
          <CardSection>
            {this.renderButton()}
          </CardSection>
          {this.renderError()}
          <LogButton text="Not your first time here?" buttonText=" Log in." onPress={Actions.login}/>
        </Card>
      </View>
   );
  }
}

const styles = {
  titleStyle: {
    color: '#000000',
    fontSize: 30,
    backgroundColor: 'transparent',
  },

  titleContainerStyle: {
    marginLeft: '15%',
    marginTop: '35%',
    marginBottom: '5%'
  },

  signInButtonTextStyle: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontFamily: "Merriweather-Light",
  },

  signInButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#1A8FE3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    errorFlag: state.auth.errorFlag,
    error: state.auth.error,
    spinner: state.auth.spinner
  };
};

export default connect(mapStateToProps, { usernameChanged, passwordChanged, createUser } )(SignupForm);

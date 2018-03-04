import React, { Component } from 'react';
import { View, Text, ScrollView, ListView } from 'react-native';
import  { PatientBasicCard } from './common';
import axios from 'axios';
import { connect } from 'react-redux';

class MainMenu extends Component {

  state = { patients: [] };

  componentWillMount() {
    console.log('fetching')
    fetch('https://floating-escarpment-15714.herokuapp.com/pacients', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.props.auth_token
      },
    })
      .then((response) => {
        console.log('got user info: ' + response);
        if(response.status === 401) {
          console.log("Erro");
        } else {
          console.log("Success!!");
          response.json().then(data => {
            console.log('data: ' )
            console.log(data.data.pacients);
            this.setState({patients: data.data.pacients});
          });
        }
      })
      .catch((error) => {
        console.log('ERORORRO: ' + error)
      })
  }

  list_(){
    console.log(this.state.patients);
    return this.state.patients.map(patient => <PatientBasicCard name={patient.name} age={patient.age} image={require('../assets/images/tiago.jpeg')} />);
  };

  render() {
    const { mainViewStyle, titleStyle, allPatientsViewStyle } = styles;
    const { auth_token } = this.props;


    return(
      <View style={mainViewStyle}>
        <Text style={titleStyle}>Patients</Text>
        {this.list_()}
      </View>
    )
  }
}

const styles = {
  mainViewStyle: {
    backgroundColor: '#FAFAFA',
    padding: 12,
    height: '100%',
  },

  allPatientsViewStyle: {
  },

  titleStyle: {
    fontSize: 42,
    fontFamily: "Merriweather-Black",
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#4E4B5C',
    paddingTop: 12,
    paddingBottom: 12,
  },
}

const mapStateToProps = (state) => {
  console.log("state: " + state.auth.auth_token)
  return { auth_token: state.auth.auth_token }
}

export default connect(mapStateToProps, {} )(MainMenu);

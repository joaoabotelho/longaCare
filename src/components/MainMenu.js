import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard } from './common';
import axios from 'axios';
import { connect } from 'react-redux';

class MainMenu extends Component {
  list = { patients: [] };

  renderList(){
      fetch('https://floating-escarpment-15714.herokuapp.com/pacients', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.props.auth_token
        },
      }).then((response) => {
        console.log('got user info: ' + response);
        if(response.status === 401) {
          console.log("Erro");
        } else {
          console.log("Success!!");
          response.json().then(data => {
            console.log(data.data.pacients);
            this.list.patients = data.data.pacients;
            this.forceUpdate()
          });
        }
      });
  };

  renderPatients(){
    if(this.props.auth_token !== ''){
      console.log(this.list.patients);
      return this.list.patients.map(patient => <PatientBasicCard name={patient.name} age={patient.age} image={require('../assets/images/tiago.jpeg')} />);
    }
  }

  render() {
    const { mainViewStyle, titleStyle, allPatientsViewStyle } = styles;

    console.log(this.props.auth_token);
    this.renderList();

    return(
      <View style={mainViewStyle}>
        <Text style={titleStyle}>Patients</Text>
        <ScrollView>
          <View style={allPatientsViewStyle}>
            <PatientBasicCard name={"Jose Antunes"} age={"18"} image={require('../assets/images/tiago.jpeg')} />
            {this.renderPatients()}
          </View>
        </ScrollView>
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
  return {
    auth_token: state.auth.auth_token,
  }
}

export default connect(mapStateToProps, {} )(MainMenu);

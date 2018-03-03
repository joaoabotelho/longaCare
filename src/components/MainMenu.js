import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard } from './common';
import axios from 'axios';
import { connect } from 'react-redux';

class MainMenu extends Component { 
  list = { patients: [] };

  componentsWillMount(){
    
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
          });
        }
      });
  };

  renderPatients(){
    console.log(this.list.patients);
    return this.list.patients.map(patient => <Text>{patient.name}</Text>);
  }
    
  render() {
    const { mainViewStyle, titleStyle, allPatientsViewStyle } = styles;

    console.log(this.props.auth_token);

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
    flex: 1,
    alignItems: 'center',
    marginTop: '10%'
  },

  allPatientsViewStyle: {
  },

  titleStyle: {
  }
}

const mapStateToProps = (state) => {
  return {
    auth_token: state.auth.auth_token,
  }
}

export default connect(mapStateToProps, {} )(MainMenu);


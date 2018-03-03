import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard } from './common';
import axios from 'axios';

class MainMenu extends Component { 
  state = { patients: [] };

  componentWillMount(){
    axios.get('').then(response => this.setState({ albums: response.data }));
  }

  render() {
    const { mainViewStyle, titleStyle, allPatientsViewStyle } = styles;

    console.log(this.state);

    return(
      <View style={mainViewStyle}>
        <Text style={titleStyle}>Patients</Text>
        <ScrollView>
          <View style={allPatientsViewStyle}>
            <PatientBasicCard name={"Jose Antunes"} age={"18"} image={require('../assets/images/tiago.jpeg')} />
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

export default MainMenu;


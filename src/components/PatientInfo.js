import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard, Chart, Report } from './common';

class PatientInfo extends Component { 
  render() {
    const { mainViewStyle, headerCharStyle, graphViewStyle } = styles;

   return(
      <View style={mainViewStyle}>
        <ScrollView>
          <PatientBasicCard name={"Jose Antunes"} age={"18"} image={require('../assets/images/tiago.jpeg')} />
          <View style={graphViewStyle}>
          <Text style={headerCharStyle}>Body Temperature</Text>
          <Chart/>
          </View>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
          <Report/>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  mainViewStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
  },
  
 headerCharStyle: {
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: '5%'
  },

  graphViewStyle: {
    marginTop: '5%',
    borderWidth: 3
  }
}

export default PatientInfo;

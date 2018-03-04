import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard, Chart, Report } from './common';

class PatientInfo extends Component {
  render() {
    const { mainViewStyle, headerCharStyle, graphViewStyle, ScrollViewStyle } = styles;

   return(
      <View style={mainViewStyle}>
        <ScrollView style={ScrollViewStyle}>
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
    paddingLeft: 12,
    paddingRight: 12,
  },

 headerCharStyle: {
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: '5%'
  },

  graphViewStyle: {
    marginTop: '5%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1A8FE3',
  }
}

export default PatientInfo;

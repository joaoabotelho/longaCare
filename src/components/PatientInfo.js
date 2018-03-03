import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard, Chart } from './common';

class PatientInfo extends Component { 
  render() {
    const { textReportStyle, reportViewStyle, mainViewStyle, headerCharStyle, graphViewStyle } = styles;

   return(
      <View style={mainViewStyle}>
        <ScrollView>
          <PatientBasicCard name={"Jose Antunes"} age={"18"} image={require('../assets/images/tiago.jpeg')} />
          <View style={graphViewStyle}>
          <Text style={headerCharStyle}>Body Temperature</Text>
          <Chart/>
          </View>
          <View style={reportViewStyle}>
            <Text style={textReportStyle}>Defecou</Text>
            <Text style={textReportStyle}>Hora: 16:24</Text>
            <Text style={textReportStyle}>pH: 7.2</Text>
            <Text style={textReportStyle}>Temp: 36.2</Text>
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
    marginTop: '10%',
  },

  reportViewStyle: {
    marginTop: '5%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3
  },

  headerCharStyle: {
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: '5%'
  },

  textReportStyle: {
    width: '50%',
    height: '50%'

  },

  graphViewStyle: {
    marginTop: '5%',
    borderWidth: 3
  }
}

export default PatientInfo;


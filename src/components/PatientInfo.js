import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import  { PatientBasicCard, Chart, Report } from './common';

class PatientInfo extends Component {
  render_reports(){
      return this.props.data.registers.map(register => <Report action={register.message} time={register.time} ph={register.ph} temp={register.temperature} hum={register.humidity}/>);
    }
  render() {
    const { mainViewStyle, headerCharStyle, graphViewStyle, ScrollViewStyle } = styles;
    console.log(this.props.data + 'in patient info');
    console.log(this.props.data.temperatures + 'in patient info');

   return(
      <View style={mainViewStyle}>
        <ScrollView style={ScrollViewStyle}>
          <PatientBasicCard name={this.props.data.pacient.name} age={this.props.data.pacient.age} image={require('../assets/images/tiago.jpeg')} />
          <View style={graphViewStyle}>
          <Text style={headerCharStyle}>Body Temperature</Text>
          <Chart data={this.props.data.temperatures}/>
          </View>
          {this.render_reports()}
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

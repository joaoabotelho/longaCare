import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Report = ({ action, time, ph, temp, hum }) => {
  const { subtextReportStyle, textReportStyle, reportViewStyle } = styles;

  return (
    <View style={reportViewStyle}>
      <Text style={textReportStyle}>{action}</Text>
      <Text style={textReportStyle}>Hora: {time}</Text>
      <Text style={subtextReportStyle}>pH: {ph}</Text>
      <Text style={subtextReportStyle}>Temp: {temp}</Text>
      <Text style={subtextReportStyle}>Humidity: {hum}</Text>
    </View>
  );
};

const styles = {

 textReportStyle: {
    width: '33%',
    height: '50%',
    fontSize: 12,
    fontFamily: "Merriweather-Black",
    fontWeight: '300',
  },

 subtextReportStyle: {
    width: '33%',
    height: '50%',
    fontSize: 12,
    fontFamily: "Merriweather-Black",
    fontWeight: '300',
  },


  reportViewStyle: {
    marginTop: '5%',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1A8FE3',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Report };

import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Report = ({ action, time, ph, temp, hum }) => {
  const { subtextReportStyle, textReportStyle, reportViewStyle, verticalText, bottomText, timeStyle } = styles;

  return (
    <View style={reportViewStyle}>
      <View style={bottomText}>
        <Text style={textReportStyle, timeStyle}>{time}</Text>
      </View>
      <View style={bottomText}>
        <View style={verticalText}>
          <Text style={subtextReportStyle}>Temp: {temp}</Text>
          <Text style={textReportStyle}>{action}</Text>
        </View>
        <View style={verticalText}>
          <Text style={subtextReportStyle}>pH: {ph}</Text>
          <Text style={subtextReportStyle}>Humidity: {hum}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {

 textReportStyle: {
    width: '100%',
    fontSize: 12,
    height: '100%',
    fontFamily: "Merriweather-Black",
    fontWeight: '300',
  },

  timeStyle: {
    fontFamily: "Merriweather-Black",
    fontWeight: '900',
  },

  verticalText: {
    flexDirection: 'column',
    width: '50%',
    height: '50%',
    justifyContent: 'center'
  },

  bottomText: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 6,
  },

 subtextReportStyle: {
    fontSize: 12,
    fontFamily: "Merriweather-Black",
    fontWeight: '300',
    height: '100%',
  },

  reportViewStyle: {
    height: 100,
    marginTop: '5%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1A8FE3',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Report };

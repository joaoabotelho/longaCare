import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Report = () => {
  const { textReportStyle, reportViewStyle } = styles;

  return (
    <View style={reportViewStyle}>
      <Text style={textReportStyle}>Defecou</Text>
      <Text style={textReportStyle}>Hora: 16:24</Text>
      <Text style={textReportStyle}>pH: 7.2</Text>
      <Text style={textReportStyle}>Temp: 36.2</Text>
    </View>
  );
};

const styles = {

 textReportStyle: {
    width: '50%',
    height: '50%',
    fontSize: 12,
    fontFamily: "Merriweather-Black",
    fontWeight: '300',
  },

  reportViewStyle: {
    marginTop: '5%',
    width: '100%',
    height: 75,
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

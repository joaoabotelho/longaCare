import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';

const PatientBasicCard = ({ name, age, image }) => {
  const { patientView, patientImageStyle, textViewStyle } = styles;

  return (
    <TouchableWithoutFeedback>
      <View style={patientView}>
        <View style={textViewStyle}>
          <Text>
            {name}
          </Text>
          <Text>{age} Years Old</Text>
        </View>
        <Image 
          source={image}
          style={patientImageStyle}/>
      </View>
    </TouchableWithoutFeedback>

  );
};
 
const styles = {
  patientView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    height: 200,
    width: 300,
  },

  textViewStyle: {
    marginLeft: "5%"
  },

  patientImageStyle: {
    backgroundColor: 'white',
    height: 150,
    width: 150,    
    marginLeft: "5%",
    resizeMode: 'contain',
    borderRadius: 30
  }
}

export { PatientBasicCard };

import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';

const PatientBasicCard = ({ name, age, image }) => {
  const { patientView, patientImageStyle, textViewStyle, textViewContainer, textName, textAge } = styles;

  return (
    <TouchableWithoutFeedback style={textViewContainer}>
      <View style={patientView}>
        <View style={textViewStyle}>
          <Text style={textName}>
            {name}
          </Text>
          <Text style={textAge}>{age} Years Old</Text>
        </View>
        <Image
          source={image}
          style={patientImageStyle}/>
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = {
  textViewContainer: {
  },

  patientView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#1A8FE3',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,

  },

  textViewStyle: {
    width: '80%',
    height: '100%',
    justifyContent: 'center'
  },

  patientImageStyle: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },

  textName: {
    fontSize: 28,
    fontFamily: "Merriweather-Black",
    fontWeight: '900',
    color: '#4E4B5C',
  },
  textAge: {
    fontSize: 12,
    fontFamily: "Merriweather-Black",
    fontWeight: '900',
    color: '#4E4B5C',
  },
}

export { PatientBasicCard };

import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../common';

const LogButton = ({ text, onPress, buttonText }) => {
  const { textStyle, viewStyle, buttonStyle, buttonTextStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {text}
      </Text>
      <Button textStyle={buttonTextStyle} buttonStyle={buttonStyle} onPress={onPress}>
        {buttonText}
      </Button>
    </View>

  )
};

const styles = {
  viewStyle: {
    flexDirection: "row",
    marginTop: '3%',
  },

  textStyle: {
    fontFamily: "Merriweather-Light",
  },

  buttonStyle: {
  },

  buttonTextStyle: {
    fontFamily: "Merriweather-Black",
  }

};

export { LogButton };

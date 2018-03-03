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
    marginTop: '2%',
  },

  textStyle: {
    fontSize: 15,
  },

  buttonStyle: {
    marginLeft: '1%'
  },

  buttonTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  }
};

export { LogButton };

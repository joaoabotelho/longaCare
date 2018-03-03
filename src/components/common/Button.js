import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, textStyle, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

export { Button };

import React from 'react';
import { Text, TextInput, View } from 'react-native';

var s = require('../../assets/style');

const Input = ({ placeholder, value, onChangeText, secureTextEntry}) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle, s.merriInput}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 23,
    flex: 1,

  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { Input };

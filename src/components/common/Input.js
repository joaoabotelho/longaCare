import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry}) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 20,
    //fontFamily: "MyriadPro-Regular",
    lineHeight: 23,
    flex: 1
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

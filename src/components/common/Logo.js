import React from 'react';
import { View, Image, Text } from 'react-native';

const Logo = () => {
  const { containerStyle, imageStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image
        style={imageStyle}
        source={require('../../assets/images/logo.png')}
      />
      <Text style={textStyle}>
        Longa Care
      </Text>
    </View>
  )
};

const styles = {
  imageStyle: {
    height: 150,
    width: 150
  },

  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25%',
    marginBottom: '5%'

  },

  textStyle: {
    color: '#ffffff',
    fontSize: 35,
    backgroundColor: 'transparent'

  }
}

export { Logo };

import React from 'react';
import { View, Image, Text } from 'react-native';

var s = require('../../assets/style');

const Logo = () => {
  const { containerStyle, imageStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image
        style={imageStyle}
      />
      <Text>
        <Text style={textStyle, s.largeTitle}>
          longa.
        </Text>
        <Text style={textStyle, s.smallTitle}>
          care
        </Text>
      </Text>
      <Text style={s.subtitle}>welcome back, carer.</Text>
    </View>
  )
};

const styles = {
  imageStyle: {
    height: 50,
    width: '100%'
  },
  containerStyle: {
    alignItems: 'flex-start',
    marginBottom: '5%',
    marginLeft: '5%',
    marginTop: '-5%',
    borderRadius: 3,
  },
}

export { Logo };

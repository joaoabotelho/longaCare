import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={[styles.containerStyle,props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor:'transparent',
    elevation: 1,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export { Card };

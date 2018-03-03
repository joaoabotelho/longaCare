import React from 'react';
import { View, Image } from 'react-native';

const Background = ({ source }) => {
  return (
    <View style={styles.containerStyle}>
        <Image
          style={styles.imageStyle}
          source={source}
        />
    </View>
  );
};

const styles = {
  containerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },

  imageStyle: {
    flex: 1,
    resizeMode: 'stretch',
  }
}

export { Background };

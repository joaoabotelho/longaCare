import React from 'react';
import { View } from 'react-native';

const InputSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#1A8FE3',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: '2%',
    position: 'relative',
  }
}
export { InputSection };

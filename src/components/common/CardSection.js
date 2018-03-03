import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginTop: '25%',
    marginBottom: '2%',
    height: 45,
  }
}
export { CardSection };

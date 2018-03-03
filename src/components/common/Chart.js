import React, { Component } from 'react';
import { View} from 'react-native';
import { AreaChart, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Line } from 'react-native-svg'

const Chart = () => {

  const data = [ 37.5, 35.2, 37.2, 38.2, 39.2, 37.2, 36.2, 37.2 ]

  const contentInset = { top: 20, bottom: 20 }
  const {} = styles;

  const HorizontalLine = (({ y }) => (
    <Line
      key={ 'zero-axis' }
      x1={ '0%' }
      x2={ '100%' }
      y1={ y(37.5) }
      y2={ y(37.5) }
      stroke={ 'red' }
      strokeWidth={ 3 }
    />
  ))

  return (
    <View style={ { height: 200, flexDirection: 'row' } }>
      <YAxis
        data={data}
        contentInset={ contentInset }
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        formatLabel={ value => `${value}ºC` }
      />

    <AreaChart
      style={ { flex: 1, marginLeft: 16 } }
      data={ data }
      contentInset={ { top: 20, bottom: 20} }
      extras = { [ HorizontalLine ]}
      curve={shape.curveNatural}
      svg={{ fill: 'rgb(134, 65, 244)', strokeWidth: 2 }}
    />     
    </View>
  );
};

const styles = {
}

export { Chart };

import {View} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';

const Checkbox = ({active, containerStyle}) => {
  return (
    <View
      style={{
        width: 18,
        height: 18,
        backgroundColor: '#F6F8FB',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EAEDF4',
        justifyContent: 'center',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {active && (
        <View style={{marginLeft: 1}}>
          <svg.ActiveCheckSvg />
        </View>
      )}
    </View>
  );
};

export default Checkbox;

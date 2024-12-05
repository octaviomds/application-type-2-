import {View} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const RadioButton = ({active}) => {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#EAEDF4',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {active && (
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: theme.colors.accent,
          }}
        />
      )}
    </View>
  );
};

export default RadioButton;

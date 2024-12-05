import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const T14 = ({children, textStyle, numberOfLines}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_400Regular,
        fontSize: 14,
        lineHeight: 14 * 1.5,
        color: theme.colors.textColor,
        ...textStyle,
      }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default T14;

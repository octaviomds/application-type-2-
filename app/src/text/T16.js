import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const T16 = ({children, textStyle}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_400Regular,
        fontSize: 16,
        lineHeight: 16 * 1.7,
        color: theme.colors.textColor,
        ...textStyle,
      }}
    >
      {children}
    </Text>
  );
};

export default T16;

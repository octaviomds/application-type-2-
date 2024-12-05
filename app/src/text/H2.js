import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const H2 = ({children, textStyle}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_600SemiBold,
        fontSize: 22,
        lineHeight: 22 * 1.4,
        color: theme.colors.mainColor,
        ...textStyle,
      }}
    >
      {children}
    </Text>
  );
};

export default H2;

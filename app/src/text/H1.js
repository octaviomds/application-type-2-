import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const H1 = ({children, textStyle}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_700Bold,
        fontSize: 32,
        color: theme.colors.mainColor,
        ...textStyle,
        textTransform: 'capitalize',
      }}
    >
      {children}
    </Text>
  );
};

export default H1;

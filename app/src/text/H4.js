import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const H4 = ({children, textStyle}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_500Medium,
        fontSize: 18,
        color: theme.colors.mainColor,
        ...textStyle,
      }}
    >
      {children}
    </Text>
  );
};

export default H4;

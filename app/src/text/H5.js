import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const H5 = ({children, textStyle}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_500Medium,
        fontSize: 16,
        color: theme.colors.mainColor,
        ...textStyle,
      }}
    >
      {children}
    </Text>
  );
};

export default H5;

import {Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const RT12 = ({children, textStyle}) => {
  return (
    <Text
      style={{
        ...theme.fonts.Hind_400Regular,
        fontSize: 12,
        color: theme.colors.textColor,
        ...textStyle,
      }}
    >
      {children}
    </Text>
  );
};

export default RT12;

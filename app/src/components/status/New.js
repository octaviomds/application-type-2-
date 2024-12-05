import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../../constants';

const New = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFBE00',
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          textTransform: 'uppercase',
          fontSize: 10,
          lineHeight: 10 * 1.7,
          ...theme.fonts.Hind_700Bold,
          color: theme.colors.white,
          marginTop: 1,
        }}
      >
        new
      </Text>
    </View>
  );
};

export default New;

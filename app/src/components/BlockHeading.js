import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets/svg';

const BlockHeading = ({title, onPress, containerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 14,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          ...theme.fonts.H3,
          color: theme.colors.mainColor,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', alignItems: 'center'}}
      >
        <svg.ViewAllSvg />
      </TouchableOpacity>
    </View>
  );
};

export default BlockHeading;

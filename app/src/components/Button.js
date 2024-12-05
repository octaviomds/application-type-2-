import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const Button = ({
  text,
  onPress,
  loading = false,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        flexDirection: 'row',
        backgroundColor: theme.colors.mainColor,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 6,
        ...containerStyle,
      }}
      onPress={onPress}
      disabled={loading ? true : false}
    >
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text
          style={{
            color: theme.colors.white,
            textTransform: 'uppercase',
            fontSize: 14,
            ...theme.fonts.Hind_600SemiBold,
            ...textStyle,
          }}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

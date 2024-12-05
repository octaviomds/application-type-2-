import {View, Text, TextInput} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const InputFieldBig = () => {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 131,
          borderRadius: theme.sizes.borderRadius,
          borderWidth: 1,
          borderColor: '#EAEDF4',
        }}
      >
        <TextInput
          style={{
            width: '100%',
            height: '100%',
            paddingHorizontal: 20,
            paddingTop: 23,
            paddingBottom: 23,
          }}
          placeholder='Enter your comment'
          textAlignVertical='top'
          multiline={true}
        />
        <View
          style={{
            position: 'absolute',
            top: -10,
            left: 10,
            paddingHorizontal: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              color: theme.colors.textColor,
              ...theme.fonts.Hind_500Medium,
              lineHeight: 12 * 1.7,
              fontSize: 12,
              textTransform: 'uppercase',
            }}
          >
            comment
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InputFieldBig;

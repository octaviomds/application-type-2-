import {View, Text} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';
import {theme} from '../constants';

const BurgerContactsCategory = ({
  textleLine1,
  textleLine2,
  containerStyle,
  icon,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: '#EAEDF4',
        ...containerStyle,
      }}
    >
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: '#F6F8FB',
          marginRight: 10,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            color: theme.colors.textColor,
            lineHeight: 14 * 1.5,
          }}
        >
          {textleLine1}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: theme.colors.textColor,
            lineHeight: 14 * 1.5,
          }}
        >
          {textleLine2}
        </Text>
      </View>
    </View>
  );
};

export default BurgerContactsCategory;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets/svg';

const ProfileCategory = ({
  title,
  containerStyle,
  icon,
  onPress,
  border = true,
  nextScreen = true,
}) => {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: border ? 1 : 0,
        borderBottomColor: '#EAEDF4',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: theme.colors.lightBlue1,
          borderRadius: 6,
          marginRight: 14,
          backgroundColor: '#F6F8FB',
        }}
      >
        {icon}
      </View>
      <Text
        style={{
          flex: 1,
          ...theme.fonts.H5,
          color: theme.colors.mainColor,
        }}
      >
        {title}
      </Text>
      {nextScreen && <svg.CategoryArrow />}
    </TouchableOpacity>
  );
};

export default ProfileCategory;

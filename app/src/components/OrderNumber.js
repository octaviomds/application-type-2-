import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../constants';

import {svg} from '../assets/svg';

const OrderNumber = ({containerStyle, onPress, orderNumber}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#EAEDF4',
        borderRadius: 6,
        paddingLeft: 20,
        paddingRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...theme.fonts.Hind_400Regular,
          fontSize: 16,
          color: theme.colors.mainColor,
        }}
      >
        {orderNumber}
      </Text>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#F6F8FB',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg.OrderNumberArrow />
      </View>
      <View
        style={{
          backgroundColor: theme.colors.white,
          position: 'absolute',
          top: -10,
          left: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            ...theme.fonts.Hind_500Medium,
            fontSize: 12,
            lineHeight: 12 * 1.7,
            textTransform: 'uppercase',
            color: theme.colors.textColor,
          }}
        >
          Order Number
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderNumber;

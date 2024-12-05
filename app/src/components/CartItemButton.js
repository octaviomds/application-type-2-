import {TouchableOpacity} from 'react-native';
import React from 'react';

import {svg} from '../assets/svg';

const CartItemButton = ({onPress, minus, plus}) => {
  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        backgroundColor: '#F6F8FB',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      {plus && <svg.PlusSvg />}
      {minus && <svg.MinusSvg />}
    </TouchableOpacity>
  );
};

export default CartItemButton;

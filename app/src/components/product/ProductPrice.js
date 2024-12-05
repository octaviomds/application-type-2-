import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../../constants';
import {text} from '../../text';

const ProductPrice = ({item, containerStyle}) => {
  const {T14} = text;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      {item.old_price && (
        <T14 textStyle={{marginRight: 4, textDecorationLine: 'line-through'}}>
          ${item.old_price.toFixed(2)}
        </T14>
      )}
      <Text
        style={{
          ...theme.fonts.Hind_600SemiBold,
          fontSize: 14,
          lineHeight: 14 * 1.5,
          color: item.old_price ? '#FF4370' : theme.colors.mainColor,
        }}
      >
        ${item.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default ProductPrice;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets/svg';
import {text} from '../text';

const CheckoutCategory = ({title, description, onPress, containerStyle}) => {
  const {fullRow} = theme;
  const {RightArrowSvg} = svg;
  const {T14, H4} = text;

  return (
    <TouchableOpacity
      style={{
        ...fullRow,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEDF4',
        paddingBottom: 10,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <View>
        <H4 textStyle={{marginBottom: 6}}>{title}</H4>
        <T14>{description}</T14>
      </View>
      <RightArrowSvg />
    </TouchableOpacity>
  );
};

export default CheckoutCategory;

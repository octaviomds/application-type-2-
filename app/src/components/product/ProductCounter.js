import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../store/slices/cartSlice';

import {svg} from '../../assets/svg';
import {theme} from '../../constants';

const ProductCounter = ({version, item}) => {
  const dispatch = useDispatch();

  const {MinusSvg, PlusSvg} = svg;

  const cart = useSelector((state) => state.cart.list);
  let quantity = cart.find((el) => el.id === item.id)?.quantity;
  quantity = quantity ? quantity : 0;

  return (
    <View
      style={{
        height: 40,
        width: 110,
        backgroundColor: '#F6F8FB',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 14,
        }}
        onPress={() => {
          dispatch(removeFromCart(item));
        }}
      >
        <MinusSvg />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          ...theme.fonts.Hind_500Medium,
          fontSize: 14,
          lineHeight: 14 * 1.6,
          color: '#576C7B',
          marginTop: 2,
        }}
      >
        {quantity}
      </Text>
      <TouchableOpacity
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 14,
        }}
        onPress={() => {
          dispatch(addToCart(item));
        }}
      >
        <PlusSvg />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCounter;

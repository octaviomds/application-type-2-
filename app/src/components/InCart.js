import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {cartSlice} from '../store/slices/cartSlice';
import {showMessage} from 'react-native-flash-message';

import {svg} from '../assets/svg';
import {theme} from '../constants';

const InCart = ({item}) => {
  const productList = useSelector((state) => state.cart.list);
  const productExist = (item) => {
    return productList.find((i) => i.id === item.id);
  };

  const {ProductBagSvg} = svg;

  const dispatch = useDispatch();

  const productExistMessage = () => {
    return Alert.alert(
      'Product already in cart',
      'The product already exists in the cart, please remove the product from the cart',
      [
        {
          text: 'Ok',
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 36,
      }}
      onPress={() => {
        if (productExist(item)) {
          productExistMessage();
        }
        if (!productExist(item)) {
          dispatch(cartSlice.actions.addToCart(item));
          showMessage({
            message: 'Success',
            description: `${item.name} added to cart`,
            type: 'success',
          });
        }
      }}
    >
      <ProductBagSvg
        color={
          productExist(item) ? theme.colors.accent : theme.colors.textColor
        }
      />
    </TouchableOpacity>
  );
};

export default InCart;

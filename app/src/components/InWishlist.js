import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromWishlist} from '../store/slices/wishlistSlice';

import {svg} from '../assets/svg';
import {theme} from '../constants';

const InWishlist = ({item}) => {
  const wishlist = useSelector((state) => state.wishlist.list);
  const itemExist = (item) => {
    return wishlist.find((i) => i.id === item.id);
  };

  const dispatch = useDispatch();

  const removeFromWishlistHandler = (item) => {
    return Alert.alert(
      'Product already in wishlist',
      'Are you sure you want to delete from wishlist ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => dispatch(removeFromWishlist(item)),
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
        top: 0,
      }}
      onPress={() => {
        if (itemExist(item)) {
          removeFromWishlistHandler(item);
        }
        if (!itemExist(item)) {
          dispatch(addToWishlist(item));
        }
      }}
    >
      <svg.LikeSvg
        fillColor={itemExist(item) ? theme.colors.accent : 'transparent'}
        strokeColor={
          itemExist(item) ? theme.colors.accent : theme.colors.textColor
        }
      />
    </TouchableOpacity>
  );
};

export default InWishlist;

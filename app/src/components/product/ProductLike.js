import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../store/slices/wishlistSlice';

import {svg} from '../../assets/svg';

const ProductLike = ({item}) => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.list);
  const itemExist = (item) => {
    return wishlist.find((i) => i.id === item.id);
  };

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
        width: 44,
        height: 44,
        backgroundColor: '#F6F8FB',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        itemExist(item)
          ? removeFromWishlistHandler(item)
          : dispatch(addToWishlist(item));
      }}
    >
      <svg.ProductLikeSvg
        strokeColor={itemExist(item) ? '#FF4370' : '#576C7B'}
        fillColor={itemExist(item) ? '#FF4370' : 'transparent'}
      />
    </TouchableOpacity>
  );
};

export default ProductLike;

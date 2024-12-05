import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromWishlist} from '../store/slices/wishlistSlice';
import {showMessage} from 'react-native-flash-message';

import {addToCart} from '../store/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {text} from '../text';

const WishlistItem = ({item, index, array}) => {
  const addedToCartMessage = ({item}) => {
    showMessage({
      message: 'Success',
      description: `${item.name} added to cart`,
      type: 'success',
    });
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const wishlist = useSelector((state) => state.wishlist.list);
  const itemInWishlistExist = (item) => {
    return wishlist.find((i) => i.id === item.id);
  };
  const cart = useSelector((state) => state.cart.list);
  const itemInCartExist = (item) => {
    return cart.find((i) => i.id === item.id);
  };

  const {ImageBackground, ProductName, ProductPrice} = components;
  const {SmallBagSvg, RatingStarSvg} = svg;
  const {RT12} = text;

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

  const itemInCartExistMessage = () => {
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
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: index + 1 === array.length ? 0 : 20,
        marginBottom: index + 1 === array.length ? 0 : 20,
        borderBottomColor: '#EAEDF4',
        borderBottomWidth: index + 1 === array.length ? 0 : 1,
        width: '100%',
      }}
    >
      <TouchableOpacity
        style={{
          width: 100,
          height: 100,
          backgroundColor: theme.colors.imageBackground,
          borderRadius: theme.sizes.borderRadius,
          marginRight: 14,
        }}
        onPress={() => navigation.navigate('Product', {item})}
      >
        <ImageBackground
          source={{uri: item.image}}
          style={{flex: 1}}
          resizeMode='contain'
          imageStyle={{borderRadius: theme.sizes.borderRadius}}
        >
          <components.SaleBadge item={item} />
        </ImageBackground>
      </TouchableOpacity>
      <View style={{flex: 1, height: 100}}>
        <ProductName item={item} textStyle={{marginBottom: 3}} />
        <ProductPrice item={item} containerStyle={{marginBottom: 10}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <RatingStarSvg />
          <RT12 textStyle={{marginTop: 2, marginLeft: 4}}>{item.rating}</RT12>
        </View>
      </View>
      <View style={{justifyContent: 'space-between', height: 100}}>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (itemInWishlistExist(item)) {
              removeFromWishlistHandler(item);
            }
            if (!itemInWishlistExist(item)) {
              dispatch(addToWishlist(item));
            }
          }}
        >
          <svg.LikeSvg
            fillColor={
              itemInWishlistExist(item) ? theme.colors.accent : 'transparent'
            }
            strokeColor={
              itemInWishlistExist(item)
                ? theme.colors.accent
                : theme.colors.textColor
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 33,
            height: 33,
            backgroundColor: theme.colors.imageBackground,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
          }}
          onPress={() => {
            if (itemInCartExist(item)) {
              itemInCartExistMessage();
            }
            if (!itemInCartExist(item)) {
              dispatch(addToCart(item));
              addedToCartMessage({item});
            }
          }}
        >
          <SmallBagSvg
            color={
              itemInCartExist(item)
                ? theme.colors.accent
                : theme.colors.textColor
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WishlistItem;

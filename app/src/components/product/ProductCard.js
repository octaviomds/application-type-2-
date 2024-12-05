import {View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../store/slices/wishlistSlice';

import {components} from '../../components';
import {theme} from '../../constants';
import {text} from '../../text';
import {svg} from '../../assets/svg';

const ProductCard = ({version, item, array, index}) => {
  const navigation = useNavigation();

  const {Image, ProductName, ProductPrice, SaleBadge, InWishlist, InCart} =
    components;
  const {RT12} = text;
  const {RatingStarSvg, HeartSmallSvg} = svg;

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

  // width: 138, height: 170 (Like in the design)
  if (version === 1) {
    return (
      <View
        style={{width: 138, marginRight: index + 1 === array.length ? 20 : 14}}
      >
        <TouchableOpacity
          style={{
            height: 170,
            width: '100%',
            marginBottom: 10,
            borderRadius: theme.sizes.borderRadius,
            backgroundColor: theme.colors.imageBackground,
          }}
          onPress={() => {
            navigation.navigate('Product', {item});
          }}
        >
          <Image
            style={{width: '100%', height: '100%', position: 'absolute'}}
            source={{uri: item.image}}
            imageStyle={{borderRadius: theme.sizes.borderRadius}}
            resizeMode='cover'
          />
          <SaleBadge item={item} />
          <InWishlist item={item} />
          <InCart item={item} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          >
            <RatingStarSvg />
            <RT12 textStyle={{marginTop: 2, marginLeft: 4}}>{item.rating}</RT12>
          </View>
        </TouchableOpacity>
        <ProductName item={item} />
        <ProductPrice item={item} />
      </View>
    );
  }

  // width: 138, height: 170 (Like in the design)
  if (version === 2) {
    return (
      <View style={{width: '47.6%', marginBottom: 20}}>
        <TouchableOpacity
          style={{
            height: 170,
            marginBottom: 10,
            borderRadius: theme.sizes.borderRadius,
            backgroundColor: theme.colors.imageBackground,
          }}
          onPress={() => {
            navigation.navigate('Product', {item});
          }}
        >
          <Image
            style={{width: '100%', height: '100%', position: 'absolute'}}
            source={{uri: item.image}}
            imageStyle={{borderRadius: theme.sizes.borderRadius}}
            resizeMode='contain'
          />
          <components.SaleBadge item={item} />
          <components.InWishlist item={item} />
          <components.InCart item={item} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 10,
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          >
            <RatingStarSvg />
            <RT12 textStyle={{marginTop: 2, marginLeft: 4}}>{item.rating}</RT12>
          </View>
        </TouchableOpacity>
        <components.ProductName item={item} />
        <components.ProductPrice item={item} />
      </View>
    );
  }

  // width: 200, height: 250 (Like in the design)
  if (version === 3) {
    return (
      <View
        style={{width: 200, marginRight: index + 1 === array.length ? 20 : 14}}
      >
        <TouchableOpacity
          style={{
            width: '100%',
            height: 250,
            marginBottom: 10,
            borderRadius: theme.sizes.borderRadius,
            backgroundColor: theme.colors.imageBackground,
          }}
          onPress={() => {
            navigation.navigate('Product', {item});
          }}
        >
          <Image
            style={{width: '100%', height: '100%', position: 'absolute'}}
            source={{uri: item.image}}
            imageStyle={{borderRadius: theme.sizes.borderRadius}}
            resizeMode='cover'
          />
          <SaleBadge item={item} />
          <InWishlist item={item} />
          <InCart item={item} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              bottom: 10,
              left: 10,
            }}
          >
            <RatingStarSvg />
            <RT12 textStyle={{marginTop: 2, marginLeft: 4}}>{item.rating}</RT12>
          </View>
        </TouchableOpacity>
        <ProductName item={item} />
        <ProductPrice item={item} />
      </View>
    );
  }

  // width: 335, height: 100 (Like in the design)
  if (version === 4) {
    return (
      <View
        style={{
          width: '100%',
          height: 100,
          marginBottom: index + 1 === array.length ? 0 : 14,
          flexDirection: 'row',
          borderRadius: theme.sizes.borderRadius,
        }}
      >
        <TouchableOpacity
          style={{
            width: 100,
            height: '100%',
            marginRight: 14,
            backgroundColor: theme.colors.imageBackground,
            borderRadius: theme.sizes.borderRadius,
          }}
          onPress={() => {
            navigation.navigate('Product', {item});
          }}
        >
          <Image
            source={{uri: item.image}}
            style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
            imageStyle={{borderRadius: theme.sizes.borderRadius}}
            resizeMode='contain'
          />
          <SaleBadge item={item} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <ProductName item={item} containerStyle={{marginBottom: 3}} />
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
        <TouchableOpacity
          style={{
            width: 33,
            height: 33,
            backgroundColor: '#F6F8FB',
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
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
          <HeartSmallSvg
            fillColor={itemExist(item) ? theme.colors.accent : 'transparent'}
            strokeColor={
              itemExist(item) ? theme.colors.accent : theme.colors.textColor
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default ProductCard;

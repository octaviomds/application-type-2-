import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../store/slices/cartSlice';
import {useNavigation} from '@react-navigation/native';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const CartItem = ({item, index, array}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {SaleBadge, ProductName, ProductPrice, Image, CartItemButton} =
    components;
  const {T14} = text;

  const cart = useSelector((state) => state.cart.list);
  const quantity = cart.find((el) => el.id === item.id).quantity;
  const color = cart.find((el) => el.id === item.id)?.color;

  return (
    <View
      style={{
        paddingBottom: index === array.length - 1 ? 20 : 14,
        borderBottomWidth: index === array.length - 1 ? 1 : 0,
        borderBottomColor: '#EAEDF4',
        marginBottom: index === array.length - 1 ? 20 : 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 100,
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
          onPress={() => navigation.navigate('Product', {item})}
        >
          <Image
            source={{uri: item.image}}
            style={{width: '100%', height: '100%', position: 'absolute'}}
            imageStyle={{borderRadius: theme.sizes.borderRadius}}
            resizeMode='cover'
          />
          <SaleBadge item={item} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <ProductName
            item={item}
            containerStyle={{
              marginBottom: 3,
            }}
          />
          <ProductPrice
            item={item}
            containerStyle={{
              marginBottom: 28,
            }}
          />
          <T14>Color: {color ? color : ' -'}</T14>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <CartItemButton
            plus={true}
            onPress={() => dispatch(addToCart(item))}
          />
          <T14 style={{textAlign: 'center'}}>{quantity}</T14>
          <CartItemButton
            minus={true}
            onPress={() => dispatch(removeFromCart(item))}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

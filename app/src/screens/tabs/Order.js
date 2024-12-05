import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useGetAllProductsQuery} from '../../store/slices/apiSlice';

import {svg} from '../../assets/svg';
import {components} from '../../components';
import {theme} from '../../constants';
import {text} from '../../text';

const Order = () => {
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cart.list);
  const total = useSelector((state) => state.cart.total).toFixed(2);
  const discount = useSelector((state) => state.cart.discount);

  const {data, isLoading, error} = useGetAllProductsQuery();

  const allProducts = data?.products;

  const {ScrollView, CartItem, SmartView, Button, Loader} = components;
  const {PromocodeAppliedSvg, EmptyCartSvg} = svg;
  const {fullRow} = theme;
  const {H2, H4, H5, T16} = text;

  if (isLoading) {
    return <Loader />;
  }

  const renderOrder = () => {
    return (
      <SmartView>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {cart.map((item, index, array) => {
            return (
              <CartItem key={index} item={item} array={array} index={index} />
            );
          })}
          <PromocodeAppliedSvg />
          <View style={{...fullRow, marginBottom: 8, marginTop: 40}}>
            <H5>Subtotal</H5>
            <H5>${total}</H5>
          </View>
          <View style={{...fullRow, marginBottom: 8}}>
            <T16>Discount</T16>
            <T16>- ${total > discount ? discount : 0}</T16>
          </View>
          <View
            style={{
              ...fullRow,
              borderBottomWidth: 1,
              borderBottomColor: '#EAEDF4',
              paddingBottom: 8,
              marginBottom: 8,
            }}
          >
            <T16>Delivery</T16>
            <T16 textStyle={{color: '#00824B'}}>Free</T16>
          </View>
          <View style={{...fullRow}}>
            <H4>Total</H4>
            {total > discount && <H4>${(total - discount).toFixed(2)}</H4>}
            {total < discount && <H4>${total}</H4>}
          </View>
        </ScrollView>
        <View style={{padding: 20}}>
          <components.Button
            text='proceed to checkout'
            onPress={() => {
              navigation.navigate('Checkout', {
                total: total,
                discount: discount,
              });
            }}
          />
        </View>
      </SmartView>
    );
  };

  const renderEmptyCart = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginBottom: 56}}>
          <EmptyCartSvg />
        </View>
        <H2 textStyle={{marginBottom: 10, textAlign: 'center'}}>
          Your cart is empty!
        </H2>
        <T16 textStyle={{textAlign: 'center', marginBottom: 30}}>
          Looks like you have not made {'\n'} your order yet.
        </T16>
        <Button
          text='Shop now'
          onPress={() => {
            navigation.navigate('Shop', {
              title: 'Shop',
              products: allProducts,
            });
          }}
        />
      </ScrollView>
    );
  };

  if (cart.length === 0) {
    return renderEmptyCart();
  }

  if (cart.length > 0) {
    return renderOrder();
  }
};

export default Order;

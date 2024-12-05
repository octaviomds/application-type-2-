import {View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const Checkout = ({route, navigation}) => {
  const {total, discount} = route.params;

  const {
    Header,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Button,
    CheckoutCategory,
    InputFieldBig,
  } = components;
  const {T14, H4} = text;
  const {fullRow} = theme;

  const cart = useSelector((state) => state.cart.list);

  const renderHeader = () => {
    return <Header title='Checkout' goBack={true} line={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingTop: 30,
          paddingHorizontal: 20,
        }}
      >
        <View style={{...fullRow, marginBottom: 10}}>
          <H4>My order</H4>
          <H4>${total - discount}</H4>
        </View>
        <View
          style={{
            backgroundColor: '#F6F8FB',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#EAEDF4',
            marginBottom: 20,
          }}
        >
          {cart.map((item, index) => {
            return (
              <View key={index} style={{...fullRow}}>
                <T14 textStyle={{marginBottom: 4, textTransform: 'capitalize'}}>
                  {item.name}
                  {item?.color && ','} {item?.color}
                </T14>
                <T14 style={{marginBottom: 4}}>
                  {item.quantity} x ${item.price}
                </T14>
              </View>
            );
          })}
          <View style={{...fullRow, marginBottom: 4}}>
            <T14>Discount</T14>
            <T14>- ${discount}</T14>
          </View>
          <View style={{...fullRow}}>
            <T14>Delivery</T14>
            <T14 textStyle={{color: '#00824B'}}>Free</T14>
          </View>
        </View>
        <CheckoutCategory
          title='Shipping details'
          description='8000 S Kirkland Ave, Chicago, IL 6065...'
          containerStyle={{marginBottom: 20}}
          onPress={() => navigation.navigate('CheckoutShippingDetails')}
        />
        <CheckoutCategory
          title='Payment method'
          description='7741 ******** 6644'
          containerStyle={{marginBottom: 40}}
          onPress={() => navigation.navigate('CheckoutPaymentMethod')}
        />
        <InputFieldBig />
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{padding: 20}}>
        <Button
          text='Confirm order'
          onPress={() => {
            navigation.navigate('OrderSuccessful');
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </SafeAreaView>
  );
};

export default Checkout;

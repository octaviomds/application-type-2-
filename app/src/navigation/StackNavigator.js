import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TabNavigator from './TabNavigator';

import {screens} from '../screens';

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Loading'
        component={screens.Loading}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='TabNavigator'
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Shop'
        component={screens.Shop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Product'
        component={screens.Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Onboarding'
        component={screens.Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='SignIn'
        component={screens.SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Reviews'
        component={screens.Reviews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='OrderHistory'
        component={screens.OrderHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='LeaveAReviews'
        component={screens.LeaveAReviews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Filter'
        component={screens.Filter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='EditProfile'
        component={screens.EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='PaymentMethod'
        component={screens.PaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='AddANewCard'
        component={screens.AddANewCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='MyAddress'
        component={screens.MyAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='AddANewAddress'
        component={screens.AddANewAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='MyPromocodes'
        component={screens.MyPromocodes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='Checkout'
        component={screens.Checkout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='CheckoutShippingDetails'
        component={screens.CheckoutShippingDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='CheckoutPaymentMethod'
        component={screens.CheckoutPaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='SignUp'
        component={screens.SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={screens.ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='AccountProcess'
        component={screens.AccountProcess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='VerifyYourPhoneNumber'
        component={screens.VerifyYourPhoneNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='ConfirmationCode'
        component={screens.ConfirmationCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='NewPassword'
        component={screens.NewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='ForgotPasswordSentEmail'
        component={screens.ForgotPasswordSentEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='SignUpAccountCreated'
        component={screens.SignUpAccountCreated}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='TrackYourOrder'
        component={screens.TrackYourOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='OrderSuccessful'
        component={screens.OrderSuccessful}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name='OrderFailed'
        component={screens.OrderFailed}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

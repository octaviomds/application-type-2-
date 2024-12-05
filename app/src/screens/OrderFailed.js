import {Text, View, ScrollView} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const OrderFailed = ({navigation}) => {
  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{marginBottom: 76}}>
          <svg.CardPaymentSvg />
        </View>

        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            lineHeight: 22 * 1.2,
            marginBottom: 14,
          }}
        >
          Sorry! Your order has failed!
        </Text>
        <Text
          style={{
            ...theme.fonts.Hind_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          Something went wrong. Please try again {'\n'} to contimue your order.
        </Text>
        <components.Button
          text='try again'
          containerStyle={{
            marginBottom: 10,
          }}
        />
        <components.Button
          text='go to my profile'
          containerStyle={{
            backgroundColor: theme.colors.transparent,
          }}
          textStyle={{
            color: theme.colors.mainColor,
          }}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'TabNavigator'}],
            });
          }}
        />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default OrderFailed;

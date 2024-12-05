import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const OrderSuccessful = ({navigation}) => {
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
          <svg.ExcellenceSvg />
        </View>

        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            lineHeight: 22 * 1.2,
            marginBottom: 14,
          }}
        >
          Thank you for your order!
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
          Your order will be delivered on time.{'\n'} Thank you!
        </Text>
        <components.Button
          text='View orders'
          containerStyle={{
            marginBottom: 10,
          }}
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
        />
        <components.Button
          text='Continue Shopping'
          containerStyle={{
            backgroundColor: theme.colors.transparent,
          }}
          textStyle={{
            color: theme.colors.mainColor,
          }}
          onPress={() => {
            navigation.navigate('TabNavigator');
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

export default OrderSuccessful;

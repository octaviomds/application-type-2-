import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import validation from '../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, REMEMBER_ME} from '../config';

import {components} from '../components';
import {svg} from '../assets/svg';
import {theme} from '../constants';

const TrackYourOrder = ({navigation, route}) => {
  // const routes = navigation.getState()?.routes;

  const {orderNumber} = route.params;

  const renderHeader = () => {
    return <components.Header goBack={true} title='Track your order' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: theme.sizes.height * 0.08,
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}
      >
        <View style={{marginBottom: 54, alignSelf: 'center'}}>
          <svg.TrackSvg />
        </View>
        <Text
          style={{
            ...theme.fonts.H3,
            color: theme.colors.mainColor,
            lineHeight: 20 * 1.2,
            textAlign: 'center',
          }}
        >
          Your order:
        </Text>
        <Text
          style={{
            ...theme.fonts.Hind_400Regular,
            fontSize: 16,
            lineHeight: 16 * 1.7,
            color: theme.colors.textColor,
            marginBottom: 30,
            textAlign: 'center',
          }}
        >
          #{orderNumber}
        </Text>
        <View style={{alignSelf: 'center'}}>
          <components.TrackCategory
            performed={true}
            status='Order created'
            comment='We have received your order'
          />
          <components.TrackCategory
            performed={true}
            status='Order confirmed'
            comment='Your order has been confirmed'
          />
          <components.TrackCategory
            performed={true}
            status='Order shipping'
            comment='Estimated for Mar 02, 2023'
          />
          <components.TrackCategory
            dots={false}
            performed={false}
            status='Courier delivering'
            comment='Estimated for Mar 05, 2023'
          />
          <components.TrackCategory
            dots={false}
            performed={false}
            status='Receiving'
            comment='Estimated for Mar 05, 2023'
          />
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default TrackYourOrder;

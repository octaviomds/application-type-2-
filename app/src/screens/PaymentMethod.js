import {View, TouchableOpacity, ScrollView as RNScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import {svg} from '../assets/svg';
import {text} from '../text';
import {theme} from '../constants';

const cards = [
  'https://george-fx.github.io/unimor/resources/cards/01.png',
  'https://george-fx.github.io/unimor/resources/cards/02.png',
  'https://george-fx.github.io/unimor/resources/cards/03.png',
];

const PaymentMethod = ({navigation}) => {
  const {Header, SafeAreaView, ScrollView, Image} = components;
  const {NewCardSvg, ApplePaySvg, EditSvg, PayPal, Payoneer} = svg;
  const {T14, H5} = text;
  const {fullRow} = theme;

  const renderHeader = () => {
    return <Header title='Payment method' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <View
          style={{
            ...fullRow,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 14,
          }}
        >
          <H5>Cards</H5>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.navigate('AddANewCard')}
          >
            <T14 textStyle={{marginRight: 14}}>Add a new card</T14>
            <NewCardSvg />
          </TouchableOpacity>
        </View>
        <RNScrollView
          horizontal={true}
          contentContainerStyle={{paddingLeft: 20}}
          showsHorizontalScrollIndicator={false}
          style={{flexGrow: 0, marginBottom: 20}}
        >
          {cards.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item}}
                style={{width: 279, height: 170, marginRight: 14}}
                imageStyle={{borderRadius: 10}}
              />
            );
          })}
        </RNScrollView>
        <View style={{paddingHorizontal: 20}}>
          <TouchableOpacity
            style={{
              ...fullRow,
              borderBottomWidth: 1,
              borderBottomColor: '#EAEDF4',
              marginBottom: 10,
              height: 52,
            }}
          >
            <ApplePaySvg />
            <EditSvg />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...fullRow,
              borderBottomWidth: 1,
              height: 52,
              borderBottomColor: '#EAEDF4',
              marginBottom: 10,
            }}
          >
            <PayPal />
            <EditSvg />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...fullRow,
              borderBottomWidth: 1,
              paddingBottom: 10,
              borderBottomColor: '#EAEDF4',
              height: 52,
            }}
          >
            <Payoneer />
            <NewCardSvg />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default PaymentMethod;

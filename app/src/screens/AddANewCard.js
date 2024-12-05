import {View, Text} from 'react-native';
import React from 'react';

import {components} from '../components';
import {svg} from '../assets/svg';
import {text} from '../text';
import {theme} from '../constants';

const AddANewCard = ({navigation}) => {
  const {Header, SafeAreaView, ScrollView, Image, InputField, Button} =
    components;
  const {NewCardSvg, ApplePaySvg, EditSvg, PayPal, Payoneer} = svg;
  const {T14, H5} = text;
  const {fullRow} = theme;

  const renderHeader = () => {
    return <Header title='Add a new card' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.08,
        }}
      >
        <Image
          source={{
            uri: 'https://george-fx.github.io/unimor/resources/cards/01.png',
          }}
          style={{
            width: 279,
            height: 170,
            alignSelf: 'center',
            marginBottom: 40,
          }}
          imageStyle={{borderRadius: 10}}
        />
        <InputField
          label='Name'
          containerStyle={{
            marginBottom: 20,
          }}
          placeholder='Elena Stout'
        />
        <InputField
          label='card number'
          containerStyle={{
            marginBottom: 20,
          }}
          placeholder='7741 6588 2123 6644'
        />

        <View
          style={{
            ...fullRow,
            marginBottom: 20,
          }}
        >
          <InputField
            label='expiry date'
            containerStyle={{
              width: '48%',
            }}
            placeholder='MM/YY'
          />
          <InputField
            label='CVV'
            containerStyle={{
              width: '48%',
            }}
            placeholder='***'
          />
        </View>

        <Button
          text='save card'
          onPress={() => {
            navigation.goBack();
          }}
        />
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

export default AddANewCard;

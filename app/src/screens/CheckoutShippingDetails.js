import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const addressess = [
  {
    id: 1,
    name: 'Home',
    address: '123, Main Street, New York, NY 10001',
  },
  {
    id: 2,
    name: 'Work',
    address: '123, Main Street, New York, NY 10001',
  },
  {
    id: 3,
    name: 'Other',
    address: '123, Main Street, New York, NY 10001',
  },
];

const CheckoutShippingDetails = () => {
  const {
    Header,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Image,
    SmartView,
    RadioButton,
    InputField,
    Checkbox,
  } = components;
  const {fullRow, row} = theme;
  const {T14, H5} = text;

  const [selectedAddress, setSelectedAddress] = useState(addressess[0].id);
  const [currentAddress, setCurrentAddress] = useState(false);

  const renderHeader = () => {
    return <Header title='Shipping details' goBack={true} />;
  };

  const renderMap = () => {
    return (
      <SmartView style={{marginTop: 10}}>
        <Image
          source={{
            uri: 'https://george-fx.github.io/unimor/resources/map/01.jpg',
          }}
          style={{flex: 1}}
          resizeMode='cover'
        />
      </SmartView>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView style={{flexGrow: 0}} contentContainerStyle={{padding: 20}}>
        {addressess.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEDF4',
                marginBottom: 10,
                ...fullRow,
              }}
              onPress={() => setSelectedAddress(item.id)}
            >
              <View>
                <H5>{item.name}</H5>
                <T14 numberOfLines={1}>{item.address}</T14>
              </View>
              <RadioButton active={selectedAddress === item.id} />
            </TouchableOpacity>
          );
        })}
        <View
          style={{marginTop: 20, ...fullRow, width: '100%', marginBottom: 12}}
        >
          <InputField
            label='enter an address'
            containerStyle={{width: '90%'}}
          />
          <RadioButton active={true} />
        </View>
        <TouchableOpacity
          style={{...row}}
          onPress={() => setCurrentAddress(!currentAddress)}
        >
          <Checkbox active={currentAddress} />
          <T14 textStyle={{marginLeft: 10, marginTop: 2}}>
            Use current location
          </T14>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderMap()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default CheckoutShippingDetails;

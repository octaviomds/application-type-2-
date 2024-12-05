import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {components} from '../components';
import {svg} from '../assets/svg';
import {text} from '../text';
import {theme} from '../constants';

const addressess = [
  {
    id: 1,
    name: 'Home',
    address: '123, Main Street, New York, NY 10001',
    icon: svg.HomeAddressSvg,
  },
  {
    id: 2,
    name: 'Work',
    address: '123, Main Street, New York, NY 10001',
    icon: svg.BriefcaseSvg,
  },
  {
    id: 3,
    name: 'Other',
    address: '123, Main Street, New York, NY 10001',
    icon: svg.AddressMapPinSvg,
  },
];

const MyAddress = ({navigation}) => {
  const {Header, SafeAreaView, ScrollView} = components;
  const {AddANewAddress, EditSvg} = svg;
  const {T14, H5} = text;
  const {fullRow, row} = theme;

  const renderHeader = () => {
    return <Header title='My address' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        {addressess.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                ...row,
                paddingBottom: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEDF4',
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F6F8FB',
                  borderRadius: theme.sizes.borderRadius,
                  marginRight: 14,
                }}
              >
                <item.icon />
              </View>
              <View style={{flex: 1}}>
                <H5>{item.name}</H5>
                <T14>{item.address}</T14>
              </View>
              <svg.EditSvg />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          paddingVertical: 20,
        }}
        onPress={() => navigation.navigate('AddANewAddress')}
      >
        <AddANewAddress />
      </TouchableOpacity>
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

export default MyAddress;

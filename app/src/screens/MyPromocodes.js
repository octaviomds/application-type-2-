import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const promocodes = [
  {
    id: '1',
    name: 'Acme Co.',
    discount: '50% off',
    color: '#F4303C',
    valid_till: 'Valid until June 30, 2021',
    image: 'https://george-fx.github.io/unimor/resources/promocodes/01.jpg',
  },
  {
    id: '2',
    name: 'Abstergo Ltd.',
    discount: '30% off',
    color: '#EF962D',
    valid_till: 'Valid until June 30, 2021',
    image: 'https://george-fx.github.io/unimor/resources/promocodes/02.jpg',
  },
  {
    id: '3',
    name: 'Barone LLC.',
    discount: '15% off',
    color: '#00824B',
    valid_till: 'Valid until June 30, 2021',
    image: 'https://george-fx.github.io/unimor/resources/promocodes/03.jpg',
  },
];

const MyPromocodes = () => {
  // const promocodes = [];

  const [activeSections, setActiveSections] = useState('Current');

  const renderHeader = () => {
    return <components.Header title='My promocodes' goBack={true} />;
  };

  const renderPromocodes = () => {
    return (
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: '48%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 25,
              backgroundColor:
                activeSections === 'Current'
                  ? theme.colors.mainColor
                  : '#F6F8FB',
              borderRadius: 6,
            }}
            onPress={() => setActiveSections('Current')}
          >
            <Text
              style={{
                color:
                  activeSections === 'Current'
                    ? theme.colors.white
                    : theme.colors.mainColor,
                ...theme.fonts.Hind_400Regular,
                fontSize: 14,
              }}
            >
              Current
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '48%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 25,
              backgroundColor:
                activeSections === 'Used' ? theme.colors.mainColor : '#F6F8FB',
              borderRadius: 6,
            }}
            onPress={() => setActiveSections('Used')}
          >
            <Text
              style={{
                color:
                  activeSections === 'Used'
                    ? theme.colors.white
                    : theme.colors.mainColor,
                ...theme.fonts.Hind_400Regular,
                fontSize: 14,
              }}
            >
              Used
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {promocodes.map((item, index) => {
            return (
              <components.PromocodeCard key={index} item={item} index={index} />
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderEmptyPromocodes = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{marginBottom: 70}}>
          <svg.DiscountVoucherSvg />
        </View>

        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            lineHeight: 22 * 1.2,
            marginBottom: 14,
            textAlign: 'center',
          }}
        >
          Your don’t have{'\n'}promocodes yet!
        </Text>
        <Text
          style={{
            marginBottom: 30,
            textAlign: 'center',
            ...theme.fonts.Hind_400Regular,
            fontSize: 16,
            color: theme.colors.textColor,
          }}
        >
          Qui ex aute ipsum duis. Incididunt{'\n'}adipisicing voluptate laborum
        </Text>
        <components.InputField
          placeholder='Promocode2023'
          label='Enter the voucher'
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <components.Button text='submit' />
      </ScrollView>
    );
  };

  const renderContent = () => {
    return promocodes.length > 0 ? renderPromocodes() : renderEmptyPromocodes();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default MyPromocodes;

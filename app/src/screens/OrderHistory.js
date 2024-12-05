import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Accordion from 'react-native-collapsible/Accordion';

import {theme} from '../constants';
import {components} from '../components';
import {svg} from '../assets/svg';

const orderHistory = [
  {
    id: '1',
    number: '100345',
    date: 'Feb 02, 2022 at 8:32 PM',
    total: '36.42',
    status: 'Shipping',
    products: [
      {
        id: '1',
        name: 'Wooden bar stool',
        quantity: 1,
        price: 29.95,
      },
      {
        id: '2',
        name: 'Pendant lamp',
        quantity: 1,
        price: 54.96,
      },
    ],
  },
  {
    id: '2',
    number: '100346',
    date: 'May 26, 2021 - 10:38 AM',
    total: '84.12',
    status: 'Delivered',
    products: [
      {
        id: '1',
        name: 'Wooden bar stool',
        quantity: 1,
        price: 29.95,
      },
      {
        id: '2',
        name: 'Pendant lamp',
        quantity: 1,
        price: 54.96,
      },
    ],
  },
  {
    id: '4',
    number: '100347',
    date: 'May 26, 2021 - 10:38 AM',
    total: '52.76',
    status: 'Canceled',
    products: [
      {
        id: '1',
        name: 'Wooden bar stool',
        quantity: 1,
        price: 29.95,
      },
      {
        id: '2',
        name: 'Pendant lamp',
        quantity: 1,
        price: 54.96,
      },
    ],
  },
];

const OrderHistory = ({navigation}) => {
  const [activeSections, setActiveSections] = useState([]);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = () => {
    return <components.Header title='Order history' goBack={true} />;
  };

  const accordionHeader = (section) => {
    return (
      <View
        style={{
          paddingBottom: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
              lineHeight: 16 * 1.2,
            }}
          >
            #{section.number}
          </Text>
          {section.status === 'Shipping' && (
            <Text
              style={{
                ...theme.fonts.Hind_400Regular,
                fontSize: 14,
                color: '#FFBE00',
              }}
            >
              Shipping
            </Text>
          )}
          {section.status === 'Delivered' && (
            <Text
              style={{
                ...theme.fonts.Hind_400Regular,
                fontSize: 14,
                color: '#00824B',
              }}
            >
              Delivered
            </Text>
          )}
          {section.status === 'Canceled' && (
            <Text
              style={{
                ...theme.fonts.Hind_400Regular,
                fontSize: 14,
                color: '#FF4370',
              }}
            >
              Canceled
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              ...theme.fonts.Hind_400Regular,
              fontSize: 12,
              lineHeight: 12 * 1.5,
              color: theme.colors.textColor,
            }}
          >
            {section.date}
          </Text>
          <Text
            style={{
              ...theme.fonts.Hind_700Bold,
              fontSize: 12,
              color: theme.colors.black,
              lineHeight: 12 * 1.5,
            }}
          >
            ${section.total}
          </Text>
        </View>
      </View>
    );
  };

  const accordionContent = (section) => {
    return (
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: '#F4F7FC',
          borderBottomColor: '#EAEDF4',
          padding: 20,
        }}
      >
        {section.products.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                ...theme.fonts.Hind_400Regular,
                color: theme.colors.textColor,
                fontSize: 14,
                lineHeight: 14 * 1.5,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                ...theme.fonts.Hind_400Regular,
                color: theme.colors.textColor,
                fontSize: 14,
                lineHeight: 14 * 1.5,
              }}
            >
              {item.quantity} x ${item.price}
            </Text>
          </View>
        ))}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 29,
          }}
        >
          <TouchableOpacity onPress={() => console.log('Repeat Order')}>
            <svg.RepeatOrderSvg />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('LeaveAReviews')}
          >
            <svg.LeaveAReviewSvg />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <Accordion
          activeSections={activeSections}
          sections={orderHistory}
          touchableComponent={TouchableOpacity}
          renderHeader={accordionHeader}
          renderContent={accordionContent}
          duration={400}
          onChange={setSections}
          sectionContainerStyle={{
            marginBottom: 8,
            borderBottomWidth: 1,
            borderColor: '#EAEDF4',
            marginHorizontal: 20,
          }}
        />
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

export default OrderHistory;

import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const creditCards = [
  {
    id: 1,
    type: 'Visa',
    number: '7741 ******** 6644',
  },
  {
    id: 2,
    type: 'MasterCard',
    number: '7674 ******** 1884',
  },
];

const paymentMethods = ['Apple Pay', 'Pay Pal', 'Cash'];

const CheckoutPaymentMethod = () => {
  const {Header, SafeAreaView, ScrollView, StatusBar, RadioButton} = components;
  const {T16, H4, H5} = text;
  const {fullRow} = theme;

  const [selectedCard, setSelectedCard] = useState(creditCards[0].id);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0],
  );

  const renderHeader = () => {
    return <Header title='Payment method' goBack={true} line={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 20}}
      >
        <H4 textStyle={{marginBottom: 20}}>Credit cards</H4>
        {creditCards.map((item, index, array) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                ...fullRow,
                paddingBottom: 20,
                borderBottomWidth: index === array.length - 1 ? 1 : 0,
                borderBottomColor: '#EAEDF4',
              }}
              onPress={() => setSelectedCard(item.id)}
            >
              <T16>{item.number}</T16>
              <RadioButton active={selectedCard === item.id} />
            </TouchableOpacity>
          );
        })}
        {paymentMethods.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                ...fullRow,
                paddingVertical: 18,
                borderBottomWidth: 1,
                borderBottomColor: '#EAEDF4',
              }}
              onPress={() => setSelectedPaymentMethod(item)}
            >
              <H5>{item}</H5>
              <RadioButton active={selectedPaymentMethod === item} />
            </TouchableOpacity>
          );
        })}
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

export default CheckoutPaymentMethod;

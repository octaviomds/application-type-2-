import {Text, ScrollView} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';

const BurgerContacts = ({showModal, setShowModal}) => {
  const navigation = useNavigation();

  const orderNumber = '100345';

  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModal(false)}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
      style={{margin: 0}}
      animationIn='slideInLeft'
      animationOut='slideOutLeft'
    >
      <ScrollView
        style={{
          width: 270,
          height: theme.sizes.height,
          backgroundColor: theme.colors.white,
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.1,
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Track your order
        </Text>
        <components.OrderNumber
          containerStyle={{marginBottom: 40}}
          onPress={() => {
            setShowModal(false);
            navigation.navigate('TrackYourOrder', {orderNumber});
          }}
          orderNumber={orderNumber}
        />
        <Text
          style={{
            ...theme.fonts.H2,
            color: theme.colors.mainColor,
            marginBottom: 20,
          }}
        >
          Contact us
        </Text>
        <components.BurgerContactsCategory
          textleLine1='27 Division St, New York,'
          textleLine2='NY 10002, USA'
          containerStyle={{marginBottom: 20}}
          icon={<svg.BurgerMapPinSvg />}
        />
        <components.BurgerContactsCategory
          textleLine1='unimorsale@mail.com'
          textleLine2='unimorsupport@mail.com'
          containerStyle={{marginBottom: 20}}
          icon={<svg.BurgerMailSvg />}
        />
        <components.BurgerContactsCategory
          textleLine1='+17  123456789'
          textleLine2='+17  987654321'
          icon={<svg.BurgerPhoneSvg />}
        />
      </ScrollView>
    </Modal>
  );
};

export default BurgerContacts;

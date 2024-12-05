import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setScreen} from '../store/slices/tabSlice';

import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';

function Header({goBack, logo, bag, title, line, search, burgerMenu}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.list);

  const {InputSearchSvg, LogoSvg, BurgerMenuSvg, GoBackSvg, HeaderBagSvg} = svg;

  const [showModal, setShowModal] = useState(false);

  const total = useSelector((state) => state.cart.total);

  const renderTitle = () => {
    if (title) {
      return <Text style={styles.text}>{title}</Text>;
    }
  };

  const renderGoBack = () => {
    if (goBack) {
      return (
        <View
          style={{
            position: 'absolute',
            left: 0,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => navigation.goBack()}
          >
            <GoBackSvg />
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderBurgerMenu = () => {
    if (burgerMenu) {
      return (
        <View
          style={{
            position: 'absolute',
            left: 0,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
            }}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <BurgerMenuSvg />
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderSearch = () => {
    if (search) {
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: theme.sizes.width - 190,
            marginRight: 60,
          }}
        >
          <View style={{marginRight: 7}}>
            <InputSearchSvg />
          </View>
          <TextInput placeholder='Search' style={{flex: 1}} />
        </View>
      );
    }
  };

  const renderBag = () => {
    if (bag) {
      return (
        <View
          style={{
            position: 'absolute',
            right: 0,
            paddingRight: 20,
          }}
        >
          <TouchableOpacity
            style={{paddingLeft: 20, flexDirection: 'row'}}
            onPress={() => {
              if (cart.length > 0) {
                dispatch(setScreen('Order'));
                navigation.navigate('TabNavigator');
              }
              if (cart.length === 0) {
                Alert.alert(
                  'Your cart is empty',
                  'Please add some items to your cart',
                  [
                    {
                      text: 'OK',
                      onPress: () => console.log('OK Pressed'),
                    },
                  ],
                );
              }
            }}
          >
            <HeaderBagSvg />
            <View
              style={{
                position: 'absolute',
                right: 15,
                bottom: -3,
                backgroundColor: theme.colors.accent,
                borderRadius: 30,
                zIndex: 2,
              }}
            >
              <Text
                style={{
                  color: theme.colors.white,
                  ...theme.fonts.Hind_700Bold,
                  fontSize: 10,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  lineHeight: 10 * 1.5,
                  marginTop: 2,
                }}
              >
                ${total === 0 || total < 0 ? '0' : total.toFixed(2)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const renderLogo = () => {
    if (logo) {
      return (
        <View style={{top: -3}}>
          <LogoSvg />
        </View>
      );
    }
  };

  const renderBottomLine = () => {
    if (line) {
      return true;
    }
  };

  const renderBurgerContacts = () => {
    return (
      <components.BurgerContacts
        showModal={showModal}
        setShowModal={setShowModal}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 42,
      borderBottomWidth: 1,
      borderBottomColor: renderBottomLine() ? '#EAEDF4' : 'transparent',
    },
    text: {
      textAlign: 'center',
      ...theme.fonts.H4,
      color: theme.colors.mainColor,
    },
  });

  return (
    <View style={{...styles.container}}>
      {renderGoBack()}
      {renderBurgerMenu()}
      {renderSearch()}
      {renderTitle()}
      {renderBag()}
      {renderLogo()}
      {renderBurgerContacts()}
    </View>
  );
}

export default Header;

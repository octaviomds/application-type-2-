import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, REMEMBER_ME} from '../../config';

import {svg} from '../../assets/svg';
import {theme} from '../../constants';
import {components} from '../../components';
import {text} from '../../text';

const Profile = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const {Loader, Image, ScrollView, ProfileCategory} = components;
  const {ProfileEditSvg} = svg;
  const {H3, T14} = text;

  const removeValues = async () => {
    setLoading(true);
    try {
      await AsyncStorage.multiRemove([TOKEN_KEY, REMEMBER_ME]).then(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'SignIn'}],
        });
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    return Alert.alert('Warning', 'Are you sure you want to sign out?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => removeValues(),
      },
    ]);
  };

  if (loading) {
    return <Loader />;
  }

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 43,
          paddingBottom: 20,
          paddingHorizontal: 20,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{
            width: 120,
            height: 120,
            marginBottom: 14,
            borderRadius: 63,
          }}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 60,
            }}
            source={{
              uri: 'https://george-fx.github.io/unimor/resources/users/01.jpg',
            }}
            resizeMode='cover'
          />
          <View style={{position: 'absolute', right: 0, bottom: 0}}>
            <ProfileEditSvg />
          </View>
        </TouchableOpacity>
        <H3
          textStyle={{
            color: theme.colors.mainColor,
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          Elena Stout
        </H3>
        <T14 textStyle={{marginBottom: 16, textAlign: 'center'}}>
          elenastout@mail.com
        </T14>
        <ProfileCategory
          title='Order history'
          icon={<svg.CalendarSvg />}
          onPress={() => {
            navigation.navigate('OrderHistory');
          }}
        />
        <ProfileCategory
          title='Payment method'
          icon={<svg.CreditCardSvg />}
          onPress={() => navigation.navigate('PaymentMethod')}
        />
        <ProfileCategory
          title='My address'
          icon={<svg.MapPinSvg />}
          onPress={() => navigation.navigate('MyAddress')}
        />
        <ProfileCategory
          title='My promocodes'
          icon={<svg.GiftSvg />}
          onPress={() => {
            navigation.navigate('MyPromocodes');
          }}
        />
        <ProfileCategory
          title='Sign out'
          icon={<svg.LogOutSvg />}
          onPress={handleSignOut}
          nextScreen={false}
          border={false}
        />
      </ScrollView>
    );
  };

  return <View style={{flex: 1}}>{renderContent()}</View>;
};

export default Profile;

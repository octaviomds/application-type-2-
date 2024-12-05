import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const EditProfile = ({navigation}) => {
  const {Image, Header, Button, InputField} = components;
  const {CameraSvg} = svg;

  const renderHeader = () => {
    return <Header title='Edit profile' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 43,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={{
            width: 120,
            height: 120,
            borderRadius: 63,
            alignSelf: 'center',
            marginBottom: 40,
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
            <CameraSvg />
          </View>
        </TouchableOpacity>
        <InputField
          label='Name'
          containerStyle={{
            marginBottom: 20,
          }}
          placeholder='Elena Stout'
        />
        <InputField
          label='Email'
          containerStyle={{
            marginBottom: 20,
          }}
          placeholder='elenastout@mail.com'
        />
        <InputField
          label='Phone number'
          containerStyle={{
            marginBottom: 20,
          }}
          placeholder='+17 123456789'
        />
        <InputField
          label='location'
          containerStyle={{
            marginBottom: 20,
          }}
          placeholder='Chicago, USA'
        />
        <Button
          text='Save'
          onPress={() => {
            navigation.goBack();
          }}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.white}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default EditProfile;

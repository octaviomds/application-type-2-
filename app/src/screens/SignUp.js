import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import validation from '../utils/validation';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {text} from '../text';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {InputField, Button, Header, SafeAreaView} = components;
  const {FacebookSvg, TwitterSvg, GoogleSvg} = svg;
  const {H1, T16} = text;

  const handleSignUp = () => {
    if (validation({username, email, password, confirmPassword})) {
      navigation.navigate('VerifyYourPhoneNumber', {
        username,
        email,
        password,
      });
    }
  };

  const renderHeader = () => {
    return <Header title='Sign up' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.1,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <H1 textStyle={{marginBottom: 40, textAlign: 'center'}}>Sign up</H1>
        <InputField
          label='Name'
          placeholder='Elena Stout'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setUsername(text)}
          check={true}
        />
        <InputField
          label='Email'
          placeholder='elenastout@mail.com'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setEmail(text)}
          check={true}
        />
        <InputField
          label='password'
          placeholder='••••••••'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          eyeOffSvg={true}
        />
        <InputField
          label='Confirm password'
          placeholder='••••••••'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
          eyeOffSvg={true}
        />
        <Button
          text='Sign up'
          containerStyle={{marginBottom: 20}}
          onPress={handleSignUp}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 33,
          }}
        >
          <T16 textStyle={{marginRight: 3}}>Already have an account?</T16>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <T16 textStyle={{color: theme.colors.mainColor}}>Sign in.</T16>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => {}}>
            <FacebookSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => {}}>
            <TwitterSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 5}} onPress={() => {}}>
            <GoogleSvg />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default SignUp;

import {TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import validation from '../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {REMEMBER_ME, TOKEN_KEY, FIRST_LAUNCH} from '../config';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';
import {text} from '../text';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const {Checkbox, InputField, Button, Header, SafeAreaView, Loader} =
    components;
  const {T16, H1} = text;
  const {fullRow, row} = theme;
  const {FacebookSvg, TwitterSvg, GoogleSvg} = svg;

  useEffect(() => {
    const setFirstLounch = async () => {
      try {
        await AsyncStorage.setItem(FIRST_LAUNCH, 'false');
      } catch (e) {
        console.log(e);
      }
    };
    setFirstLounch();
  }, []);

  const handleSignIn = async () => {
    if (validation({email, password})) {
      setLoading(true);
      try {
        await AsyncStorage.multiSet([
          [REMEMBER_ME, rememberMe.toString()],
          [TOKEN_KEY, 'token'],
        ]);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
        navigation.navigate('TabNavigator');
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  const goBack = () => {
    if (navigation.canGoBack()) {
      return true;
    } else {
      return false;
    }
  };

  const renderHeader = () => {
    return <Header title='Sign in' goBack={goBack()} />;
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
        <H1 textStyle={{marginBottom: 14, textAlign: 'center'}}>
          Welcome Back!
        </H1>
        <T16 textStyle={{marginBottom: 30, textAlign: 'center'}}>
          Sign in to continue
        </T16>
        <InputField
          label='Email'
          placeholder='kristinwatson@mail.com'
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
        <View style={{...fullRow, marginBottom: 30}}>
          <TouchableOpacity
            style={{...row}}
            onPress={() => setRememberMe((rememberMe) => !rememberMe)}
          >
            <Checkbox active={rememberMe} />
            <T16 textStyle={{marginLeft: 10}}>Remember me</T16>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <T16 textStyle={{color: theme.colors.mainColor}}>
              Forgot password?
            </T16>
          </TouchableOpacity>
        </View>
        <Button
          text='Sign in'
          containerStyle={{marginBottom: 20}}
          onPress={handleSignIn}
        />
        <View style={{...row, marginBottom: 40}}>
          <T16>Don’t have an account? </T16>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <T16 textStyle={{color: theme.colors.mainColor}}>Sign up.</T16>
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

export default SignIn;

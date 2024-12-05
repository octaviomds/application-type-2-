import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import validation from '../utils/validation';

import {components} from '../components';
import {text} from '../text';

const NewPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {Header, InputField, Button, SafeAreaView} = components;
  const {T16} = text;

  const handleChangePassword = () => {
    if (validation({password, confirmPassword})) {
      navigation.navigate('ForgotPasswordSentEmail');
    }
  };

  const renderHeader = () => {
    return <Header title='Reset password' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 30,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <T16 textStyle={{marginBottom: 40}}>
          Enter new password and confirm.
        </T16>
        <InputField
          label='new password'
          containerStyle={{marginBottom: 20}}
          eyeOffSvg={true}
          placeholder='••••••••'
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <InputField
          label='confirm password'
          containerStyle={{marginBottom: 20}}
          eyeOffSvg={true}
          placeholder='••••••••'
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
        />
        <Button text='Change password' onPress={handleChangePassword} />
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

export default NewPassword;

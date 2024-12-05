import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import validation from '../utils/validation';

import {components} from '../components';
import {text} from '../text';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const {Header, InputField, Button, SafeAreaView} = components;
  const {T16} = text;

  const handleSendEmail = () => {
    if (validation({email})) {
      navigation.navigate('NewPassword');
    }
  };

  const renderHeader = () => {
    return <Header title='Forgot password' goBack={true} />;
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
        <T16 textStyle={{marginBottom: 50}}>
          Please enter your email address. You will receive a link to create a
          new password via email.
        </T16>
        <InputField
          label='Email'
          placeholder='elenastout@mail.com'
          containerStyle={{marginBottom: 20}}
          onChangeText={(text) => setEmail(text)}
          check={false}
        />
        <Button
          text='Send'
          containerStyle={{marginBottom: 20}}
          onPress={handleSendEmail}
        />
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

export default ForgotPassword;

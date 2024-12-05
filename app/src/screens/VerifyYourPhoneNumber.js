import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import validation from '../utils/validation';
import PhoneInput from 'react-native-phone-input';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const VerifyYourPhoneNumber = ({navigation, route}) => {
  const {username, email, password} = route.params;

  const {Header, Button} = components;
  const {T16} = text;

  const [phone, setPhone] = useState('+17123456789');

  const handleVerifyYourPhoneNumber = () => {
    if (validation({phone})) {
      navigation.navigate('ConfirmationCode', {
        username,
        email,
        password,
        phone,
      });
    }
  };

  const renderHeader = () => {
    return <Header title='Verify your phone number' goBack={true} />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 40,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <T16 textStyle={{marginBottom: 40, lineHeight: 16 * 1.7}}>
          We have sent you an SMS with a code to number {`${phone}`}.
        </T16>
        <View
          style={{
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 6,
            borderColor: '#EAEDF4',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: -12,
              left: 10,
              paddingHorizontal: 10,
              backgroundColor: theme.colors.white,
            }}
          >
            <Text
              style={{
                ...theme.fonts.Hind_500Medium,
                fontSize: 12,
                textTransform: 'uppercase',
                color: theme.colors.textColor,
                lineHeight: 12 * 1.7,
                marginTop: 2,
              }}
            >
              phone number
            </Text>
          </View>
          <PhoneInput
            style={{paddingVertical: 16, paddingHorizontal: 20}}
            initialCountry={'us'}
            initialValue='+170123456789'
            textStyle={{
              fontSize: 16,
              ...theme.fonts.Hind_400Regular,
              color: theme.colors.mainColor,
            }}
            onChangePhoneNumber={(phoneState) => setPhone(phoneState)}
          />
        </View>
        <Button text='confirm' onPress={handleVerifyYourPhoneNumber} />
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

export default VerifyYourPhoneNumber;

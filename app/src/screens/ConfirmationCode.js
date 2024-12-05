import {TouchableOpacity, View, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import validation from '../utils/validation';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const ConfirmationCode = ({navigation, route}) => {
  const {username, email, password, phone} = route.params;

  const {Header, Button, SafeAreaView} = components;
  const {T16} = text;

  const inp1Ref = useRef(null);
  const inp2Ref = useRef(null);
  const inp3Ref = useRef(null);
  const inp4Ref = useRef(null);
  const inp5Ref = useRef(null);

  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');
  const [inp3, setInp3] = useState('');
  const [inp4, setInp4] = useState('');
  const [inp5, setInp5] = useState('');

  const code = inp1 + inp2 + inp3 + inp4 + inp5;

  const handleConfirmationCode = () => {
    if (validation({code})) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'AccountProcess',
            params: {
              username,
              email,
              password,
              phone,
            },
          },
        ],
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
        <T16 textStyle={{lineHeight: 16 * 1.7, marginBottom: 30}}>
          Enter your OTP code here.
        </T16>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <View
            style={{
              width: Math.round(theme.sizes.width / 7),
              height: Math.round(theme.sizes.width / 7),
              borderRadius: 6,
              borderWidth: 1,
              borderColor: inp1 !== '' ? '#F6F8FB' : '#EAEDF4',
              backgroundColor: inp1 !== '' ? '#F6F8FB' : null,
            }}
          >
            <TextInput
              ref={inp1Ref}
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 20,
                color: theme.colors.mainColor,
                ...theme.fonts.Hind_400Regular,
              }}
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(text) => {
                setInp1(text);
                if (text !== '') {
                  inp2Ref.current.focus();
                } else if (text === '') {
                  inp1Ref.current.focus();
                }
              }}
            />
          </View>
          <View
            style={{
              width: Math.round(theme.sizes.width / 7),
              height: Math.round(theme.sizes.width / 7),
              borderRadius: 6,
              borderWidth: 1,
              borderColor: inp2 !== '' ? '#F6F8FB' : '#EAEDF4',
              backgroundColor: inp2 !== '' ? '#F6F8FB' : null,
            }}
          >
            <TextInput
              ref={inp2Ref}
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: Math.round(theme.sizes.width / 20),
                color: theme.colors.black,
                ...theme.fonts.Mulish_400Regular,
              }}
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(text) => {
                setInp2(text);
                if (text !== '') {
                  inp3Ref.current.focus();
                } else if (text === '') {
                  inp1Ref.current.focus();
                }
              }}
            />
          </View>
          <View
            style={{
              width: Math.round(theme.sizes.width / 7),
              height: Math.round(theme.sizes.width / 7),
              borderRadius: 6,
              borderWidth: 1,
              borderColor: inp3 !== '' ? '#F6F8FB' : '#EAEDF4',
              backgroundColor: inp3 !== '' ? '#F6F8FB' : null,
            }}
          >
            <TextInput
              ref={inp3Ref}
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: Math.round(theme.sizes.width / 20),
                color: theme.colors.black,
                ...theme.fonts.Mulish_400Regular,
              }}
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(text) => {
                setInp3(text);
                if (text !== '') {
                  inp4Ref.current.focus();
                } else if (text === '') {
                  inp2Ref.current.focus();
                }
              }}
            />
          </View>
          <View
            style={{
              width: Math.round(theme.sizes.width / 7),
              height: Math.round(theme.sizes.width / 7),
              borderRadius: 6,
              borderWidth: 1,
              borderColor: inp4 !== '' ? '#F6F8FB' : '#EAEDF4',
              backgroundColor: inp4 !== '' ? '#F6F8FB' : null,
            }}
          >
            <TextInput
              ref={inp4Ref}
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: Math.round(theme.sizes.width / 20),
                color: theme.colors.black,
                ...theme.fonts.Mulish_400Regular,
              }}
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(text) => {
                setInp4(text);
                if (text !== '') {
                  inp5Ref.current.focus();
                } else if (text === '') {
                  inp3Ref.current.focus();
                }
              }}
            />
          </View>
          <View
            style={{
              width: Math.round(theme.sizes.width / 7),
              height: Math.round(theme.sizes.width / 7),
              borderRadius: 6,
              borderWidth: 1,
              borderColor: inp5 !== '' ? '#F6F8FB' : '#EAEDF4',
              backgroundColor: inp5 !== '' ? '#F6F8FB' : null,
            }}
          >
            <TextInput
              ref={inp5Ref}
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: Math.round(theme.sizes.width / 20),
                color: theme.colors.black,
                ...theme.fonts.Mulish_400Regular,
              }}
              keyboardType='number-pad'
              maxLength={1}
              onChangeText={(text) => {
                setInp5(text);
                if (text === '') {
                  inp4Ref.current.focus();
                }
              }}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}
        >
          <T16 textStyle={{lineHeight: 16 * 1.7}}>Didn’t receive the OTP? </T16>
          <TouchableOpacity>
            <T16
              textStyle={{
                lineHeight: 16 * 1.7,
                color: theme.colors.mainColor,
              }}
              onPress={() => {}}
            >
              Resend.
            </T16>
          </TouchableOpacity>
        </View>
        <Button text='verify' onPress={handleConfirmationCode} />
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

export default ConfirmationCode;

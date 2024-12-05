import {View} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {components} from '../components';
import {svg} from '../assets/svg';
import {text} from '../text';

const ForgotPasswordSentEmail = ({navigation}) => {
  const {Button, ScrollView, SafeAreaView} = components;
  const {PadlockSvg} = svg;
  const {T16, H2} = text;

  const handleDone = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginBottom: 56}}>
          <PadlockSvg />
        </View>
        <H2 textStyle={{textAlign: 'center', marginBottom: 14}}>
          Your password has{'\n'}been reset!
        </H2>
        <T16 textStyle={{textAlign: 'center', marginBottom: 30}}>
          Qui ex aute ipsum duis. Incididunt{'\n'}adipisicing voluptate laborum
        </T16>
        <Button text='Done' onPress={handleDone} />
      </ScrollView>
    );
  };

  return <SafeAreaView>{renderContent()}</SafeAreaView>;
};

export default ForgotPasswordSentEmail;

import {View, ScrollView} from 'react-native';
import React from 'react';

import {components} from '../components';
import {svg} from '../assets/svg';
import {text} from '../text';

const SignUpAccountCreated = ({navigation}) => {
  const {Button, SafeAreaView} = components;
  const {CreatedUserSvg} = svg;
  const {H2, T16} = text;

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
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginBottom: 56}}>
          <CreatedUserSvg />
        </View>

        <H2 textStyle={{textAlign: 'center', marginBottom: 14}}>
          Account Created!
        </H2>
        <T16 textStyle={{textAlign: 'center', marginBottom: 30}}>
          Your account had beed created{'\n'}
          successfully.
        </T16>
        <Button text='sign in' onPress={handleDone} />
      </ScrollView>
    );
  };

  return <SafeAreaView>{renderContent()}</SafeAreaView>;
};

export default SignUpAccountCreated;

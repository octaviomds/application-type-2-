import {View} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {svg} from '../assets/svg';
import {theme} from '../constants';
import {text} from '../text';

const LeaveAReviews = ({navigation}) => {
  const {Button, Header, SafeAreaView, Rating, InputFieldBig} = components;
  const {H2, T16} = text;
  const {ReviewSvg} = svg;

  const renderHeader = () => {
    return <Header goBack={true} title='Leave a review' />;
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: theme.sizes.height * 0.08,
          flexGrow: 1,
          alignItems: 'center',
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={{marginBottom: theme.sizes.height * 0.07}}>
          <ReviewSvg />
        </View>
        <H2 textStyle={{marginBottom: 20}}>
          Please rate the quality of
          {'\n'}
          service for the order!
        </H2>
        <Rating containerStyle={{marginBottom: 20}} />
        <T16 textStyle={{marginBottom: 38, textAlign: 'center'}}>
          Your comments and suggestions help us{'\n'}improve the service quality
          better!
        </T16>
        <View style={{width: '100%'}}>
          <InputFieldBig />
        </View>
        <Button
          text='submit'
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}
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

export default LeaveAReviews;

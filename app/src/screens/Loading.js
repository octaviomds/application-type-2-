import {View, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import useFirstLaunch from '../hooks/useFirstLaunch';
import useGetToken from '../hooks/useGetToken';
import useRememberMe from '../hooks/useRememberMe';

import {theme} from '../constants';

function Loading({navigation}) {
  const {isFirstLaunch: isFirstLaunch, isLoading: isFirstLaunchIsLoading} =
    useFirstLaunch();
  const {isTokenExists: isTokenExists, isLoading: isTokenExistsIsLoading} =
    useGetToken();
  const {isRememberMe: isRememberMe, isLoading: isRememberMeIsLoading} =
    useRememberMe();

  const loading =
    isFirstLaunchIsLoading || isTokenExistsIsLoading || isRememberMeIsLoading;

  useEffect(() => {
    if (!loading) {
      if (isFirstLaunch) {
        navigation.replace('Onboarding');
        return;
      }
      if (!isTokenExists || !isRememberMe) {
        navigation.replace('SignIn');
        return;
      }
      if (isRememberMe && isTokenExists) {
        navigation.replace('TabNavigator');
        return;
      }
    }
  }, [loading]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}
    >
      <ActivityIndicator size='large' color={theme.colors.lightGray} />
    </View>
  );
}

export default Loading;

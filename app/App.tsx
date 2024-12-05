import React from 'react';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator';
import {store} from './src/store/store';

import {components} from './src/components';

const App = () => {
  const {StatusBar} = components;

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
      <FlashMessage position='top' floating={true} />
    </SafeAreaProvider>
  );
};

export default App;

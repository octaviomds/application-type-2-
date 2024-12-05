import {View} from 'react-native';
import React from 'react';

import {components} from '..';

const SmartView = ({children, isLoading, style}) => {
  const {Loader} = components;

  return (
    <View style={{flex: 1, ...style}}>{isLoading ? <Loader /> : children}</View>
  );
};

export default SmartView;

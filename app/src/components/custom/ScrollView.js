import {ScrollView as RNScrollView} from 'react-native';
import React from 'react';

const ScrollView = ({
  children,
  contentContainerStyle,
  showsVerticalScrollIndicator,
  style,
}) => {
  return (
    <RNScrollView
      contentContainerStyle={{flexGrow: 1, ...contentContainerStyle}}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      style={style}
    >
      {children}
    </RNScrollView>
  );
};

export default ScrollView;

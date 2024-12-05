import {Text, View} from 'react-native';
import React from 'react';

import {components} from '../components';
import {text} from '../text';

const Brand = ({title, active, onPress}) => {
  const {Checkbox} = components;
  const {T16} = text;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Checkbox
        active={active}
        containerStyle={{
          marginRight: 10,
        }}
      />
      <T16>{title}</T16>
    </View>
  );
};

export default Brand;

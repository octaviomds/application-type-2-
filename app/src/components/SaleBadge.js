import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';

const SaleBadge = ({item}) => {
  if (item?.is_sale) {
    return (
      <View
        style={{
          width: 30,
          height: 16,
          backgroundColor: '#9AC173',
          borderTopLeftRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            ...theme.fonts.Hind_700Bold,
            fontSize: 8,
            textTransform: 'uppercase',
            color: theme.colors.white,
            marginTop: 2,
          }}
        >
          Sale
        </Text>
      </View>
    );
  }
};

export default SaleBadge;

import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets/svg';

const TrackCategory = ({line, performed, status, comment, dots = true}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 0}}>
      <View style={{alignItems: 'center', marginRight: 24}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderWidth: 2,
            borderColor: '#EAEDF4',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}
        >
          {performed && (
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: theme.colors.black,
              }}
            />
          )}
        </View>
        <View style={{opacity: dots === false ? 0 : 1}}>
          <svg.DotsSvg />
        </View>
      </View>
      <View>
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 6,
            marginTop: 3,
            lineHeight: 16 * 1.2,
          }}
        >
          {status}
        </Text>
        <Text
          style={{
            ...theme.fonts.Hind_400Regular,
            fontSize: 16,
            lineHeight: 14 * 1.5,
            color: theme.colors.textColor,
          }}
        >
          {comment}
        </Text>
      </View>
    </View>
  );
};

export default TrackCategory;

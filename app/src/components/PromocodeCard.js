import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {showMessage} from 'react-native-flash-message';

import {components} from '../components';
import {svg} from '../assets/svg';
import {theme} from '../constants';

const PromocodeCard = ({item, index}) => {
  const {Image} = components;

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomColor: '#EAEDF4',
      }}
      onPress={() => {
        showMessage({
          message: 'Success',
          description: `${item.name} promocode was copied to clipboard`,
          type: 'success',
        });
      }}
    >
      <Image
        style={{
          width: 73,
          height: 84,
          marginRight: 14,
        }}
        imageStyle={{
          borderRadius: 6,
        }}
        source={{
          uri: item.image,
        }}
        resizeMode='cover'
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            ...theme.fonts.H4,
            color: theme.colors.mainColor,
            lineHeight: 18 * 1.2,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            flex: 1,
            fontSize: 21,
            ...theme.fonts.Hind_600SemiBold,
            lineHeight: 21 * 1.7,
            color:
              index === 0
                ? '#F4303C'
                : index === 1
                ? '#EF962D'
                : index === 2
                ? '#00824B'
                : index === 3
                ? '#F4303C'
                : index === 4
                ? '#EF962D'
                : index === 5
                ? '#00824B'
                : index === 6
                ? '#F4303C'
                : index === 7
                ? '#EF962D'
                : index === 8
                ? '#00824B'
                : index === 9
                ? '#F4303C'
                : '#EF962D',
          }}
        >
          {item.discount}
        </Text>
        <Text
          style={{
            lineHeight: 14 * 1.7,
            ...theme.fonts.Hind_400Regular,
            fontSize: 14,
            color: theme.colors.textColor,
          }}
        >
          {item.valid_till}
        </Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <svg.CopySvg />
      </View>
    </TouchableOpacity>
  );
};

export default PromocodeCard;

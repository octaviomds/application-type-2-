import {View, Text} from 'react-native';
import React from 'react';

import {svg} from '../../assets/svg';
import {theme} from '../../constants';

const ProductRating = ({containerStyle, item, version}) => {
  if (version === 1) {
    return (
      <View
        style={{
          ...containerStyle,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <svg.RatingStarSvg />
        <Text
          style={{
            marginLeft: 4,
            marginTop: 2,
            ...theme.fonts.Hind_400Regular,
            fontSize: 12,
            color: theme.colors.textColor,
          }}
        >
          {item.rating}
        </Text>
      </View>
    );
  }

  if (version === 2) {
    return (
      <View
        style={{
          ...containerStyle,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{marginRight: 1}}>
          <svg.RatingStarSvg
            fillColor={item.rating >= 1 ? '#FFBE00' : 'transparent'}
          />
        </View>
        <View style={{marginHorizontal: 1}}>
          <svg.RatingStarSvg
            fillColor={item.rating >= 2 ? '#FFBE00' : 'transparent'}
          />
        </View>
        <View style={{marginHorizontal: 1}}>
          <svg.RatingStarSvg
            fillColor={item.rating >= 3 ? '#FFBE00' : 'transparent'}
          />
        </View>
        <View style={{marginHorizontal: 1}}>
          <svg.RatingStarSvg
            fillColor={item.rating >= 4 ? '#FFBE00' : 'transparent'}
          />
        </View>
        <View style={{marginLeft: 1}}>
          <svg.RatingStarSvg
            fillColor={item.rating >= 5 ? '#FFBE00' : 'transparent'}
          />
        </View>
        <Text
          style={{
            marginLeft: 4,
            marginTop: 2,
            ...theme.fonts.Hind_400Regular,
            fontSize: 12,
            color: theme.colors.textColor,
          }}
        >
          {item.rating}
        </Text>
      </View>
    );
  }
};

export default ProductRating;

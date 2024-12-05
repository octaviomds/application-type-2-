import {View, Text} from 'react-native';
import React from 'react';

import {theme} from '../../constants';
import {components} from '../../components';

const ProductReview = ({item, array, index}) => {
  const {Image, ProductRating} = components;

  return (
    <View
      style={{
        width: '100%',
        borderColor: '#EAEDF4',
        borderBottomWidth: array.length - 1 === index ? 0 : 1,
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: index === 0 ? 6 : 20,
      }}
    >
      <Image
        source={{uri: item.image}}
        style={{
          width: 50,
          height: 50,
          marginRight: 14,
        }}
        imageStyle={{
          borderRadius: 6,
        }}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 4,
          }}
        >
          <Text
            style={{
              ...theme.fonts.H5,
              color: theme.colors.mainColor,
              lineHeight: 16 * 1.6,
              textTransform: 'capitalize',
            }}
          >
            {item.name}
          </Text>
          <ProductRating version={1} item={item} />
        </View>
        <Text
          style={{
            ...theme.fonts.Hind_400Regular,
            fontSize: 10,
            lineHeight: 10 * 1.5,
            marginBottom: 10,
            color: theme.colors.textColor,
          }}
        >
          {item.created_at}
        </Text>
        <Text
          style={{
            ...theme.fonts.Hind_400Regular,
            fontSize: 14,
            lineHeight: 14 * 1.5,
            color: theme.colors.textColor,
          }}
        >
          {item.comment}
        </Text>
      </View>
    </View>
  );
};

export default ProductReview;

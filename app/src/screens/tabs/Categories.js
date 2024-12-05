import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {components} from '../../components';
import {theme} from '../../constants';
import {text} from '../../text';

const categories = [
  {
    id: 1,
    name: 'Lightning',
    image: 'https://george-fx.github.io/unimor/resources/categories/01.jpg',
    loaded: false,
  },
  {
    id: 2,
    name: 'Bedding',
    image: 'https://george-fx.github.io/unimor/resources/categories/02.jpg',
    loaded: false,
  },
  {
    id: 3,
    name: 'Chairs',
    image: 'https://george-fx.github.io/unimor/resources/categories/03.jpg',
    loaded: false,
  },
  {
    id: 4,
    name: 'Decor',
    image: 'https://george-fx.github.io/unimor/resources/categories/04.jpg',
    loaded: false,
  },
  {
    id: 5,
    name: 'Tables',
    image: 'https://george-fx.github.io/unimor/resources/categories/05.jpg',
    loaded: false,
  },
];

const Categories = () => {
  const navigation = useNavigation();

  const {ScrollView, ImageBackground} = components;
  const {H4} = text;

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 15,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {categories.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                width: index === 2 ? '100%' : '48%',
                height: 160,
                backgroundColor: '#F6F8FB',
                marginBottom: 15,
                borderRadius: theme.sizes.borderRadius,
              }}
              onPress={() => {
                navigation.navigate('Shop');
              }}
            >
              <ImageBackground
                source={{uri: item?.image}}
                style={{
                  flex: 1,
                  paddingHorizontal: 14,
                  paddingVertical: 8,
                  justifyContent: 'flex-end',
                }}
                resizeMode='cover'
                imageStyle={{borderRadius: theme.sizes.borderRadius}}
              >
                <H4>{item?.name}</H4>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  return <View style={{flex: 1}}>{renderContent()}</View>;
};

export default Categories;

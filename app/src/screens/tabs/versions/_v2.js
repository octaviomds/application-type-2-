import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView as RNScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetAllProductsQuery} from '../../../store/slices/apiSlice';

import {components} from '../../../components';
import {theme} from '../../../constants';
import {text} from '../../../text';

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
    name: 'Decor',
    image: 'https://george-fx.github.io/unimor/resources/categories/03.jpg',
    loaded: false,
  },
  {
    id: 4,
    name: 'Chairs',
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

const _v2 = () => {
  const navigation = useNavigation();

  const {
    Loader,
    ScrollView,
    Image,
    ImageBackground,
    BannerTitle,
    BannerButton,
    ProductCard,
    BlockHeading,
  } = components;
  const {H2, T14} = text;
  const {data, isLoading, error} = useGetAllProductsQuery();

  const featured = data?.products?.filter((item) => item?.is_featured);
  const bestSellers = data?.products?.filter((item) => item?.is_bestseller);

  if (isLoading) {
    return <Loader />;
  }

  const renderBanner_1 = () => {
    return (
      <TouchableOpacity
        style={{
          width: theme.sizes.width,
          height: 200,
          marginTop: 20,
          marginBottom: 40,
          borderRadius: 0,
        }}
        onPress={() => {
          navigation.navigate('Shop');
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
          }}
          source={{
            uri: 'https://george-fx.github.io/unimor/resources/banners/02.jpg',
          }}
          imageStyle={{borderRadius: 0}}
          resizeMode='cover'
        >
          <View style={{alignSelf: 'flex-start'}}>
            <H2 textStyle={{marginBottom: 8, textAlign: 'left'}}>
              {'Take 50% off now!'}
            </H2>
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 39,
                paddingVertical: 13,
                alignSelf: 'flex-start',
                borderRadius: theme.sizes.borderRadius,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.Hind_600SemiBold,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: theme.colors.mainColor,
                }}
              >
                shop now
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderCategories = () => {
    return (
      <RNScrollView
        horizontal={true}
        contentContainerStyle={{paddingLeft: 20}}
        style={{flexGrow: 0, marginBottom: 40}}
        showsHorizontalScrollIndicator={false}
      >
        {categories?.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                width: 70,
                marginRight: index + 1 === categories.length ? 20 : 14,
              }}
              key={index}
            >
              <View
                style={{
                  height: 70,
                  backgroundColor: '#F6F8FB',
                  marginBottom: 6,
                  borderRadius: theme.sizes.borderRadius,
                }}
              >
                <Image
                  source={{uri: item.image}}
                  style={{flex: 1}}
                  imageStyle={{borderRadius: theme.sizes.borderRadius}}
                  resizeMode='cover'
                />
              </View>
              <T14
                textStyle={{textAlign: 'center', color: theme.colors.mainColor}}
              >
                {item.name}
              </T14>
            </TouchableOpacity>
          );
        })}
      </RNScrollView>
    );
  };

  const renderFeatured = () => {
    const slice = featured?.slice(0, 6);

    return (
      <View style={{width: '100%', marginBottom: 40}}>
        <components.BlockHeading
          title='Featured products'
          onPress={() => {
            navigation.navigate('Shop');
          }}
        />
        <RNScrollView
          contentContainerStyle={{paddingLeft: 20}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {slice.map((item, index, array) => {
            return (
              <components.ProductCard
                key={index}
                item={item}
                version={3}
                array={array}
                index={index}
              />
            );
          })}
        </RNScrollView>
      </View>
    );
  };

  const renderBanner_2 = () => {
    return (
      <TouchableOpacity
        style={{
          width: theme.sizes.width,
          height: 150,
          marginBottom: 40,
          borderRadius: 0,
        }}
        onPress={() => {
          navigation.navigate('Shop');
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
          }}
          source={{
            uri: 'https://george-fx.github.io/unimor/resources/banners/03.jpg',
          }}
          imageStyle={{borderRadius: 0}}
          resizeMode='cover'
        >
          <View style={{alignSelf: 'flex-start'}}>
            <H2 textStyle={{marginBottom: 8, textAlign: 'left'}}>
              {'Take 25% off today!'}
            </H2>
            <View
              style={{
                backgroundColor: theme.colors.white,
                paddingHorizontal: 39,
                paddingVertical: 13,
                alignSelf: 'flex-start',
                borderRadius: theme.sizes.borderRadius,
              }}
            >
              <Text
                style={{
                  ...theme.fonts.Hind_600SemiBold,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: theme.colors.mainColor,
                }}
              >
                shop now
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderBestSellers = () => {
    const slice = bestSellers?.slice(0, 6);
    return (
      <View style={{marginBottom: 40}}>
        <BlockHeading
          title='Best sellers'
          onPress={() => {
            navigation.navigate('Shop');
          }}
        />
        <View style={{paddingHorizontal: 20}}>
          {slice?.map((item, index, array) => {
            return (
              <ProductCard
                key={index}
                item={item}
                version={4}
                array={array}
                index={index}
              />
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      {renderBanner_1()}
      {renderCategories()}
      {renderFeatured()}
      {renderBanner_2()}
      {renderBestSellers()}
    </ScrollView>
  );
};

export default _v2;

import {
  View,
  ScrollView as RNScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {useGetAllProductsQuery} from '../../../store/slices/apiSlice';
import {useNavigation} from '@react-navigation/native';

import {theme} from '../../../constants';
import {components} from '../../../components';
import {text} from '../../../text';

const _v1 = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const {ScrollView, CarouselItem, ImageBackground, Loader, Image} = components;
  const {H2, H1} = text;

  const {data, isLoading, error} = useGetAllProductsQuery();

  const featured = data?.products?.filter((item) => item?.is_featured);
  const bestSellers = data?.products?.filter((item) => item?.is_bestseller);
  const carousel = data?.carousel;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  if (isLoading) {
    return <Loader />;
  }

  const renderDots = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}
      >
        {carousel.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: theme.colors.mainColor,
                marginHorizontal: 5,
                opacity: currentSlideIndex === index ? 1 : 0.2,
              }}
            />
          );
        })}
      </View>
    );
  };

  const renderCarousel = () => {
    return (
      <View style={{marginBottom: 38}}>
        <RNScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {carousel.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: theme.sizes.width,
                  height: 450,
                }}
              >
                <Image
                  source={{uri: item.image}}
                  style={{flex: 1}}
                  resizeMode='cover'
                />
                <View
                  style={{position: 'absolute', marginTop: 40, marginLeft: 20}}
                >
                  <H1 textStyle={{lineHeight: 32 * 1.4, textAlign: 'left'}}>
                    {item.titleLine1}
                  </H1>
                  <H1 textStyle={{lineHeight: 32 * 1.4, textAlign: 'left'}}>
                    {item.titleLine2}
                  </H1>
                </View>
              </View>
            );
          })}
        </RNScrollView>
        {renderDots()}
      </View>
    );
  };

  const renderBestSellers = () => {
    const slice = bestSellers.slice(0, 6);

    return (
      <View style={{marginBottom: 40}}>
        <components.BlockHeading
          title='Best sellers'
          onPress={() => {
            navigation.navigate('Shop', {
              title: 'Best sellers',
              products: bestSellers,
            });
          }}
        />
        <RNScrollView
          horizontal={true}
          contentContainerStyle={{paddingLeft: 20}}
          showsHorizontalScrollIndicator={false}
        >
          {slice.map((item, index, array) => {
            return (
              <components.ProductCard
                key={index}
                item={item}
                index={index}
                version={1}
                array={array}
              />
            );
          })}
        </RNScrollView>
      </View>
    );
  };

  const renderBanner = () => {
    return (
      <TouchableOpacity
        style={{
          width: theme.sizes.width,
          height: 150,
          marginTop: 20,
          marginBottom: 40,
          paddingHorizontal: 20,
          borderRadius: theme.sizes.borderRadius,
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
            uri: 'https://george-fx.github.io/unimor/resources/banners/01.jpg',
          }}
          resizeMode='cover'
          imageStyle={{borderRadius: theme.sizes.borderRadius}}
        >
          <View style={{alignSelf: 'flex-end'}}>
            <H2 textStyle={{marginBottom: 8, textAlign: 'left'}}>
              {'Take 50% off!'}
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

  const renderFeatured = () => {
    const slice = featured.slice(0, 6);

    return (
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <components.BlockHeading
          title='Featured products'
          onPress={() => {
            navigation.navigate('Shop', {
              title: 'Featured products',
              products: featured,
            });
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
        >
          {slice.map((item, index) => {
            return (
              <components.ProductCard key={index} version={2} item={item} />
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {renderCarousel()}
      {renderBestSellers()}
      {renderBanner()}
      {renderFeatured()}
    </ScrollView>
  );
};

export default _v1;

import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView as RNScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../store/slices/cartSlice';
import {showMessage} from 'react-native-flash-message';

import {components} from '../components';
import {theme} from '../constants';

const Product = ({route, navigation}) => {
  const {item} = route.params;
  const images = item.images;
  const colors = item.colors;
  const reviews = item.reviews.slice(0, 3);
  const reviewsCount = item.reviews.length;
  console.log('reviewsCount', reviewsCount);

  const dispatch = useDispatch();

  const {
    Header,
    SafeAreaView,
    Button,
    ScrollView,
    ProductLike,
    ProductRating,
    ProductCounter,
    Image,
    BlockHeading,
    ProductReview,
  } = components;

  const cart = useSelector((state) => state.cart.list);
  const currentItem = cart.find((i) => i.id === item.id);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [color, setColor] = useState(
    currentItem ? currentItem.color : item.colors[1],
  );

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const renderHeader = () => {
    return <Header goBack={true} logo={true} bag={true} />;
  };

  const renderCarousel = () => {
    return (
      <View style={{height: 300, marginBottom: 20}}>
        <RNScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onMomentumScrollEnd={updateCurrentSlideIndex}
        >
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                source={{uri: item}}
                style={{
                  width: theme.sizes.width,
                  height: '100%',
                  backgroundColor: theme.colors.imageBackground,
                }}
                resizeMode='cover'
              />
            );
          })}
        </RNScrollView>
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            bottom: 20,
            alignSelf: 'center',
          }}
        >
          {images.map((item, index) => {
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
      </View>
    );
  };

  const renderColors = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginTop: 4,
            marginRight: 25,
          }}
        >
          Color
        </Text>
        {colors.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setColor(item)}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor:
                  item === 'carrot'
                    ? '#FF6262'
                    : item === 'blue'
                    ? '#63C7FF'
                    : item === 'beige'
                    ? '#F8E7CD'
                    : item === 'purple'
                    ? '#323858'
                    : item === 'black'
                    ? '#111111'
                    : '',
                marginHorizontal: 7,
                borderRadius: 34,
                borderWidth: 4,
                borderColor:
                  item === color ? '#EAEDF4' : theme.colors.transparent,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderProductInfo = () => {
    return (
      <View
        style={{
          width: theme.sizes.width,
          paddingHorizontal: 20,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{...theme.fonts.H3, textTransform: 'capitalize'}}>
            {item.name}
          </Text>
          <ProductLike item={item} />
        </View>
        <View style={{marginBottom: 5}}>
          <ProductRating item={item} version={2} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              ...theme.fonts.Hind_600SemiBold,
              fontSize: 20,
              color: theme.colors.mainColor,
            }}
          >
            ${item.price}
          </Text>
          <ProductCounter item={item} />
        </View>
        {renderColors()}
        <Text
          style={{
            ...theme.fonts.H5,
            color: theme.colors.mainColor,
            marginBottom: 12,
          }}
        >
          Description
        </Text>
        <Text
          style={{
            ...theme.fonts.Hind_400Regular,
            fontSize: 16,
            color: theme.colors.textColor,
            lineHeight: 16 * 1.7,
          }}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  const renderReviews = () => {
    return (
      <View style={{width: theme.sizes.width}}>
        <BlockHeading
          title={`Reviews (${reviewsCount})`}
          onPress={() => {
            navigation.navigate('Reviews', {
              reviews: item.reviews,
            });
          }}
        />
        <View style={{paddingHorizontal: 20}}>
          {reviews.map((item, index, array) => {
            return (
              <ProductReview
                key={index}
                item={item}
                version={2}
                array={array}
                index={index}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView>
        {renderCarousel()}
        {renderProductInfo()}
        {renderReviews()}
      </ScrollView>
    );
  };

  const renderButton = () => {
    return (
      <View style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 30}}>
        <Button
          text='Add to cart'
          onPress={() => {
            dispatch(
              addToCart({
                ...item,
                color,
              }),
            );
            showMessage({
              message: 'Success',
              description: `${item.name} added to cart`,
              type: 'success',
            });
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </SafeAreaView>
  );
};

export default Product;

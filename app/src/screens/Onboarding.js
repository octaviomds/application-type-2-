import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const onboardingData = [
  {
    id: 1,
    title: 'Welcome to\nUnimor!',
    description:
      'Labore sunt culpa excepteur culpa ipsum.\nLabore occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/unimor/resources/onboarding/01.jpg',
  },

  {
    id: 2,
    title: 'Easy Track\nOrder!',
    description:
      'Labore sunt culpa excepteur culpa ipsum.\nLabore occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/unimor/resources/onboarding/02.jpg',
  },
  {
    id: 3,
    title: 'Door to Door\nDelivery!',
    description:
      'Labore sunt culpa excepteur culpa ipsum.\nLabore occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/unimor/resources/onboarding/03.jpg',
  },
];

import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';
import {text} from '../text';

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const insets = useSafeAreaInsets();
  const homeIndicatorHeight = insets.bottom;

  const paddingTabVertical = 20;

  const {ImageBackground, SafeAreaView, Button} = components;
  const {OnboardingLogoSvg} = svg;
  const {H1, T16} = text;

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / theme.sizes.width);
    setCurrentSlideIndex(currentIndex);
  };

  const homeIndicatorSettings = () => {
    if (homeIndicatorHeight !== 0) {
      return homeIndicatorHeight;
    }
    if (homeIndicatorHeight === 0) {
      return paddingTabVertical;
    }
  };

  const renderContent = () => {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
      >
        {onboardingData.map((item, index, array) => {
          return (
            <ImageBackground
              key={index}
              style={{
                width: theme.sizes.width,
                height: '100%',
                justifyContent: 'flex-end',
              }}
              source={{uri: item.image}}
            >
              <View
                style={{
                  backgroundColor: '#F6F8FB',
                  position: 'absolute',
                  height: theme.sizes.height / 5,
                  width: '100%',
                }}
              />
              <View
                style={{
                  paddingHorizontal: 20,
                  marginBottom: homeIndicatorSettings(),
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.white,
                    borderRadius: 10,
                    paddingBottom: 20,
                    paddingTop: 30,
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  }}
                >
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      height: 128,
                      marginBottom: 2,
                    }}
                  >
                    <View style={{position: 'absolute'}}>
                      <OnboardingLogoSvg />
                    </View>
                    <H1 textStyle={{marginBottom: 12, textAlign: 'center'}}>
                      {item.title}
                    </H1>
                  </View>
                  <T16 textStyle={{textAlign: 'center', marginBottom: 25}}>
                    {item.description}
                  </T16>
                  <View style={{flexDirection: 'row', marginBottom: 25}}>
                    {array.map((_, index) => {
                      return (
                        <View
                          key={index}
                          style={{
                            width: 6,
                            height: 6,
                            backgroundColor: theme.colors.mainColor,
                            marginHorizontal: 5,
                            borderRadius: 3,
                            opacity: currentSlideIndex === index ? 1 : 0.2,
                          }}
                        />
                      );
                    })}
                  </View>
                  <Button
                    text='Get Started'
                    onPress={() => navigation.navigate('SignIn')}
                  />
                </View>
              </View>
            </ImageBackground>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView edges={['left', 'right']}>{renderContent()}</SafeAreaView>
  );
};

export default Onboarding;

import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {tabSlice} from '../store/slices/tabSlice';

import Home from '../screens/tabs/Home';
import Categories from '../screens/tabs/Categories';
import Order from '../screens/tabs/Order';
import Wishlist from '../screens/tabs/Wishlist';
import Profile from '../screens/tabs/Profile';

import {theme} from '../constants';
import {svg} from '../assets/svg';
import {components} from '../components';

const TabNavigator = () => {
  const dispatch = useDispatch();
  const currentTabScreen = useSelector((state) => state.tab.screen);
  const insets = useSafeAreaInsets();
  const homeIndicatorHeight = insets.bottom;

  const {StatusBar, SmartView, Image, Header} = components;

  const cart = useSelector((state) => state.cart.list);

  const paddingTabVertical = 16;

  const tabs = [
    {
      name: 'Home',
      icon: svg.HomeSvg,
    },
    {
      name: 'Categories',
      icon: svg.SearchSvg,
    },
    {
      name: 'Order',
      icon: svg.BagSvg,
    },
    {
      name: 'Wishlist',
      icon: svg.HeartSvg,
    },
    {
      name: 'Profile',
      icon: svg.UserSvg,
    },
  ];

  const tabScreens = {
    Home: 'Home',
    Categories: 'Categories',
    Order: 'Order',
    Wishlist: 'Wishlist',
    Profile: 'Profile',
  };

  const renderTabName = () => {
    if (currentTabScreen === 'Profile') {
      return 'My profile';
    }
    if (currentTabScreen === 'Order' && cart.length > 0) {
      return 'Order';
    }

    if (currentTabScreen === 'Order' && cart.length === 0) {
      return 'Cart';
    }

    if (currentTabScreen === 'Wishlist') {
      return 'Wishlist';
    }
  };

  const renderLogo = () => {
    if (currentTabScreen === 'Home') {
      return true;
    }
  };

  const renderSearch = () => {
    if (currentTabScreen === 'Categories') {
      return true;
    }
  };

  const renderLine = () => {
    if (currentTabScreen === 'Wishlist') {
      return false;
    } else {
      return true;
    }
  };

  const renderHeader = () => {
    return (
      <Header
        title={renderTabName()}
        line={renderLine()}
        burgerMenu={true}
        bag={true}
        logo={renderLogo()}
        search={renderSearch()}
      />
    );
  };

  const selectedTab = () => {
    const renderScreens = () => {
      switch (currentTabScreen) {
        case tabScreens.Home:
          return <Home />;
        case tabScreens.Categories:
          return <Categories />;
        case tabScreens.Order:
          return <Order />;
        case tabScreens.Wishlist:
          return <Wishlist />;
        case tabScreens.Profile:
          return <Profile />;
      }
    };
    return <View style={{flex: 1}}>{renderScreens()}</View>;
  };

  const homeIndicatorSettings = () => {
    if (homeIndicatorHeight !== 0) {
      return homeIndicatorHeight;
    }
    if (homeIndicatorHeight === 0) {
      return paddingTabVertical;
    }
  };

  const renderBottomBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 29,
          backgroundColor: theme.colors.mainColor,
          paddingTop: paddingTabVertical,
          paddingBottom: homeIndicatorSettings(),
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      >
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{alignItems: 'center'}}
              onPress={() => dispatch(tabSlice.actions.setScreen(tab.name))}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.colors.white,
                    position: 'absolute',
                    opacity: tab.name === currentTabScreen ? 0.2 : 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    borderRadius: 6,
                  }}
                />
                <tab.icon />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.colors.white}}
      edges={['top']}
    >
      {renderHeader()}
      {selectedTab()}
      {renderBottomBar()}
    </SafeAreaView>
  );
};

export default TabNavigator;

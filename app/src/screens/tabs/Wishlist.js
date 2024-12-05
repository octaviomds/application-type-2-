import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {components} from '../../components';
import {text} from '../../text';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.list);

  const {ScrollView, WishlistItem} = components;
  const {H2} = text;

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 17,
          paddingBottom: 20,
        }}
      >
        {wishlist.map((item, index, array) => {
          return (
            <WishlistItem key={index} item={item} index={index} array={array} />
          );
        })}
      </ScrollView>
    );
  };

  const renderWishlistIsEmpty = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <H2 textStyle={{marginBottom: 10, textAlign: 'center'}}>
          Your wishlist is empty.
        </H2>
      </ScrollView>
    );
  };

  if (wishlist.length === 0) {
    return renderWishlistIsEmpty();
  }

  if (wishlist.length > 0) {
    return renderContent();
  }

  // return <SmartView>{renderContent()}</SmartView>;
};

export default Wishlist;

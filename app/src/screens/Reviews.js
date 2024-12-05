import React from 'react';

import {components} from '../components';

const Reviews = ({route}) => {
  const {reviews} = route.params;
  const {Header, SafeAreaView, ScrollView, ProductReview} = components;

  const renderHeader = () => {
    return <Header goBack={true} title='Reviews' />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
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
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Reviews;

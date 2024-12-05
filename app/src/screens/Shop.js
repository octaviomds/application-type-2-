import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetAllProductsQuery} from '../store/slices/apiSlice';

import {components} from '../components';
import {theme} from '../constants';
import {svg} from '../assets/svg';

const Shop = ({navigation}) => {
  const {data, isLoading, error} = useGetAllProductsQuery();
  const allProducts = data?.products;

  const {Header, ProductCard, Loader} = components;
  const {FilterSvg, SortSvg} = svg;

  const white = theme.colors.white;

  if (isLoading) {
    return <Loader />;
  }

  const renderHeader = () => {
    return <Header title={'Shop'} goBack={true} bag={true} />;
  };

  const renderSettings = () => {
    return (
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Filter');
          }}
        >
          <FilterSvg />
        </TouchableOpacity>
        <TouchableOpacity>
          <SortSvg />
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <FlatList
        data={allProducts}
        renderItem={({item}) => <ProductCard item={item} version={2} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          marginHorizontal: 20,
          flexGrow: 1,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      {renderHeader()}
      {renderSettings()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default Shop;

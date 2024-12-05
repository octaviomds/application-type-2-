import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {components} from '../components';
import {theme} from '../constants';
import {text} from '../text';

const colors = ['carrot', 'blue', 'beige', 'purple', 'black'];

const Filter = ({navigation}) => {
  const {
    SafeAreaView,
    Header,
    Button,
    ScrollView,
    Checkbox,
    New,
    Sale,
    Top,
    Brand,
  } = components;
  const {H5, T14} = text;
  const {mainColor} = theme.colors;

  const [newProduct, setNewProduct] = useState(false);
  const [saleProduct, setSaleProduct] = useState(false);
  const [topProduct, setTopProduct] = useState(false);
  const [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)],
  );

  const [durian, setDurian] = useState(false);
  const [ikea, setIkea] = useState(false);
  const [usha, setUsha] = useState(false);
  const [godrejInterio, setGodrejInterio] = useState(false);
  const [royaloak, setRoyaloak] = useState(false);
  const [solimo, setSolimo] = useState(false);
  const [wipro, setWipro] = useState(false);
  const [dews, setDews] = useState(false);

  const renderHeader = () => {
    return <Header title='Filter' goBack={true} />;
  };

  const renderColors = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
          marginTop: 20,
        }}
      >
        <H5 textStyle={{marginTop: 4, marginRight: 25}}>Color</H5>
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

  const renderCustomMarker = (e) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 20,
            height: 20,
            marginHorizontal: 10,
            backgroundColor: theme.colors.black,
            borderRadius: 10,
            alignSelf: 'center',
          }}
        />
        <T14 textStyle={{position: 'absolute', bottom: -30}}>
          ${e.currentValue}
        </T14>
      </View>
    );
  };

  const renderPrice = () => {
    return (
      <View style={{marginBottom: 40}}>
        <H5 textStyle={{marginBottom: 18}}>Price</H5>
        <MultiSlider
          isMarkersSeparated={true}
          customMarkerLeft={(e) => renderCustomMarker(e)}
          customMarkerRight={(e) => renderCustomMarker(e)}
          values={[0, 800]}
          min={0}
          max={800}
          step={1}
          sliderLength={theme.sizes.width - 40}
          selectedStyle={{backgroundColor: mainColor}}
          unselectedStyle={{backgroundColor: '#EAEDF4'}}
          containerStyle={{height: 20, width: '100%', marginBottom: 20}}
          trackStyle={{height: 3, width: '100%', borderRadius: 3}}
        />
      </View>
    );
  };

  const renderStatus = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 57,
        }}
      >
        <TouchableOpacity
          style={{width: '32%', flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setSaleProduct(!saleProduct)}
        >
          <Checkbox active={saleProduct} containerStyle={{marginRight: 8}} />
          <Sale />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '32%', flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setNewProduct(!newProduct)}
        >
          <Checkbox active={newProduct} containerStyle={{marginRight: 8}} />
          <New />
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: '32%', flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setTopProduct(!topProduct)}
        >
          <Checkbox active={topProduct} containerStyle={{marginRight: 8}} />
          <Top />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBrands = () => {
    return (
      <View style={{marginBottom: 59}}>
        <H5 textStyle={{marginBottom: 16}}>Brand</H5>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}
        >
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setDurian(!durian)}
          >
            <Brand title='Durian' active={durian} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setIkea(!ikea)}
          >
            <Brand title='Ikea' active={ikea} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setUsha(!usha)}
          >
            <Brand title='Usha' active={usha} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setGodrejInterio(!godrejInterio)}
          >
            <Brand title='Godrej Interio' active={godrejInterio} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setRoyaloak(!royaloak)}
          >
            <Brand title='Royaloak' active={royaloak} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setSolimo(!solimo)}
          >
            <Brand title='Solimo' active={solimo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setWipro(!wipro)}
          >
            <Brand title='Wipro' active={wipro} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%', marginBottom: 10}}
            onPress={() => setDews(!dews)}
          >
            <Brand title='Dews' active={dews} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View style={{padding: 20}}>
        <Button
          text='apply filters'
          onPress={() => navigation.navigate('Shop')}
        />
      </View>
    );
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 40,
        }}
      >
        {renderColors()}
        {renderPrice()}
        {renderStatus()}
        {renderBrands()}
      </ScrollView>
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

export default Filter;

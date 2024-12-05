import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {components} from '../components';
import {text} from '../text';

const AddANewAddress = ({navigation}) => {
  const {Header, SafeAreaView, Image, SmartView, InputField, Button, Checkbox} =
    components;
  const {T14} = text;

  const [selected, setSelected] = useState(false);

  const renderHeader = () => {
    return <Header title='Add a new address' goBack={true} />;
  };

  const renderMap = () => {
    return (
      <SmartView style={{marginTop: 10}}>
        <Image
          source={{
            uri: 'https://george-fx.github.io/unimor/resources/map/01.jpg',
          }}
          style={{flex: 1}}
          resizeMode='cover'
        />
      </SmartView>
    );
  };

  const renderContent = () => {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 40,
          paddingBottom: 20,
        }}
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 0}}
      >
        <InputField
          label='title'
          placeholder='Mom'
          containerStyle={{
            marginBottom: 20,
          }}
        />
        <InputField
          label='enter a new address'
          placeholder='3646 S 58th Ave, Cicero, IL 60804, U...'
          containerStyle={{
            marginBottom: 22,
          }}
        />
        <TouchableOpacity
          style={{marginBottom: 18, flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            setSelected(!selected);
          }}
        >
          <Checkbox active={selected} />
          <T14 textStyle={{marginLeft: 10, marginTop: 2}}>
            Use current location
          </T14>
        </TouchableOpacity>

        <Button
          text='save address'
          onPress={() => {
            navigation.goBack();
          }}
        />
      </KeyboardAwareScrollView>
    );
  };

  return (
    <SafeAreaView>
      {renderHeader()}
      {renderMap()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default AddANewAddress;

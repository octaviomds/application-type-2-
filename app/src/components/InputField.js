import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import {theme} from '../constants';
import {svg} from '../assets/svg';

function InputField({
  label,
  placeholder,
  containerStyle,
  secureTextEntry,
  keyboardType,
  onChangeText,
  onBlur,
  onSubmitEditing,
  innerRef,
  clearButtonMode,
  value,
  eyeOffSvg,
  check,
}) {
  return (
    <View
      style={{
        paddingLeft: 20,
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#EAEDF4',
        borderRadius: 6,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          fontSize: 16,
          ...theme.fonts.Hind_400Regular,
        }}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={theme.colors.lightGray}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        ref={innerRef}
        clearButtonMode={clearButtonMode}
        value={value}
      />
      {label && (
        <View
          style={{
            position: 'absolute',
            top: -12,
            left: 10,
            paddingHorizontal: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              ...theme.fonts.Hind_500Medium,
              fontSize: 12,
              textTransform: 'uppercase',
              color: theme.colors.textColor,
              lineHeight: 12 * 1.7,
              marginTop: 2,
            }}
          >
            {label}
          </Text>
        </View>
      )}
      {eyeOffSvg && (
        <TouchableOpacity style={{paddingHorizontal: 20}}>
          <svg.EyeOffSvg />
        </TouchableOpacity>
      )}
      {check && <View style={{paddingHorizontal: 20}}>{<svg.CheckSvg />}</View>}
    </View>
  );
}

export default InputField;

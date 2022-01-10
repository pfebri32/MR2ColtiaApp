import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Color from '../colors';
import {OpenSans, OpenSansSemiBold} from '../fonts';

const Input = ({error, label, style, ...rest}) => {
  return (
    <View style={style.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor={Color.gray}
        style={styles.field}
        {...rest}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontFamily: OpenSans,
    fontSize: 12,
    marginTop: 2,
  },
  field: {
    backgroundColor: Color.white,
    borderRadius: 4,
    color: Color.black,
    paddingHorizontal: 16,
  },
  label: {
    color: Color.white,
    fontFamily: OpenSansSemiBold,
    fontSize: 16,
    marginBottom: 6,
  },
});

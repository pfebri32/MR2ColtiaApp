import React from 'react';
import {StyleSheet, View} from 'react-native';

const Rectangle = ({size, style}) => {
  return <View style={[styles.rect(size), style]} />;
};

export default Rectangle;

const styles = StyleSheet.create({
  rect: size => ({
    height: size,
    width: size,
  }),
});

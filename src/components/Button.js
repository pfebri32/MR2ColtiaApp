import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Color from '../colors';
import {Staatliches} from '../fonts';

const Button = ({style, title, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.button, style?.button]} {...rest}>
      <Text style={[styles.title, style?.title]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Color.blue,
    borderRadius: 4,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  title: {
    color: Color.white,
    fontFamily: Staatliches,
    fontSize: 20,
  },
});

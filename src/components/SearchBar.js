import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import Color from '../colors';

const SearchBar = ({style, onPress, ...rest}) => {
  return (
    <View style={[styles.bar, style?.bar]}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={Color.gray}
        style={styles.field}
        {...rest}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name="search" size={24} color={Color.black} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Color.white,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    width: 52,
  },
  field: {
    alignItems: 'center',
    backgroundColor: Color.white,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    color: Color.black,
    flex: 1,
    fontSize: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

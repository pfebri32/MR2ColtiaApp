import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Circle extends Component {
  constructor(props) {
    console.log(props);
    super(props);
  }
  render() {
    return <View style={[styles.circle(this.props.size), this.props.style]} />;
  }
}

export default Circle;

const styles = StyleSheet.create({
  circle: size => ({
    borderRadius: size / 2,
    height: size,
    width: size,
  }),
});

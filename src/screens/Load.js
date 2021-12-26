import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Circle from '../components/geometris/Circle';
import {Staatliches} from '../fonts';
import {LoadConfig} from '../config';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Load = ({navigation, addAccounts}) => {
  const [loading, setLoading] = useState(true);

  // Animations.
  const anim = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.loop(
      Animated.timing(anim, {
        useNativeDriver: true,
        toValue: 10,
        duration: LoadConfig.animation,
        easing: Easing.inOut(Easing.linear),
      }),
      -1,
    ).start();
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  useEffect(() => {
    handleLoad();
    if (loading) return;
    setTimeout(() => {
      console.log('IN');
    }, LoadConfig.duration);
  }, [loading]);

  // Load accounts.
  const handleLoad = async () => {
    try {
      // Get accounts from storage.
      const res = await AsyncStorage.getItem('@accounts');
      if (!res) return;

      // Add accounts from storage to redux.
      addAccounts(JSON.parse(res));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.loading}>LOADING</Text>
        <View style={styles.dots}>
          <AnimatedCircle
            size={LoadConfig.dots.size}
            style={[
              styles.circle,
              {
                opacity: anim.interpolate({
                  inputRange: [0, 1, 5, 6],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          />
          <AnimatedCircle
            size={LoadConfig.dots.size}
            style={[
              styles.circle,
              {
                opacity: anim.interpolate({
                  inputRange: [1, 2, 6, 7],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          />
          <AnimatedCircle
            size={LoadConfig.dots.size}
            style={[
              styles.circle,
              {
                opacity: anim.interpolate({
                  inputRange: [2, 3, 7, 8],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          />
          <AnimatedCircle
            size={LoadConfig.dots.size}
            style={[
              styles.circle,
              {
                opacity: anim.interpolate({
                  inputRange: [3, 4, 8, 9],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          />
          <AnimatedCircle
            size={LoadConfig.dots.size}
            style={[
              styles.circle,
              {
                opacity: anim.interpolate({
                  inputRange: [4, 5, 9, 10],
                  outputRange: [1, 0, 0, 1],
                }),
              },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  addAccounts: value => dispatch({type: 'ADD_ACCOUNTS', payload: value}),
});

export default connect(null, mapDispatchToProps)(Load);

const styles = StyleSheet.create({
  circle: {
    backgroundColor: LoadConfig.dots.color,
    marginHorizontal: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dots: {
    flexDirection: 'row',
  },
  loading: {
    color: '#555',
    fontFamily: Staatliches,
    fontSize: 24,
    marginBottom: 4,
  },
});

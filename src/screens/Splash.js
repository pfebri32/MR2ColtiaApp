import React, {useEffect, useRef} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Animated} from 'react-native';

import {Staatliches} from '../fonts';
import {SplashConfig} from '../config';

const Splash = ({navigation}) => {
  // Animations.
  const anim = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(anim, {
      useNativeDriver: true,
      toValue: 1,
      duration: SplashConfig.animation,
    }).start();
  };

  useEffect(() => {
    animate();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.appname}>MR2 COLTIA</Text>
        <Animated.Text style={[styles.creator, {opacity: anim}]}>
          CREATED BY PFEBRI32
        </Animated.Text>
      </View>
      <View>
        <Text style={styles.version}>Version 0.0.1-a.1</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  appname: {
    color: '#333',
    fontFamily: Staatliches,
    fontSize: 40,
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
  creator: {
    color: '#333',
    fontSize: 12,
  },
  version: {
    color: '#777',
    fontSize: 12,
  },
});

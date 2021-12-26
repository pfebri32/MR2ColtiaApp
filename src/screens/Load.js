import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View} from 'react-native';

const Load = () => {
  // DELETE THIS
  useEffect(() => {
    Demo();
  }, []);
  const Demo = async () => {
    try {
      const res = await AsyncStorage.getItem('@accounts');
      if (!res) return;
      console.log(JSON.parse(res));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Load</Text>
    </View>
  );
};

export default Load;

const styles = StyleSheet.create({});

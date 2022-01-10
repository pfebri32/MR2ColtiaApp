import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Color from '../../colors';
import {Staatliches} from '../../fonts';
import {useNavigation} from '@react-navigation/native';

const MainLayout = ({children, header}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      {header}
      <View style={{flex: 1}}>{children}</View>
      <View style={styles.bar}>
        <TouchableOpacity style={styles.button}>
          <Icon color={Color.white} name="pets" size={26} />
          <Text style={styles.title}>Ranch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon color={Color.white} name="schedule" size={26} />
          <Text style={styles.title}>Schedules</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon color={Color.white} name="home" size={26} />
          <Text style={styles.title}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('MonsterCards')}>
          <Icon color={Color.white} name="view-carousel" size={26} />
          <Text style={styles.title}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon color={Color.white} name="menu" size={26} />
          <Text style={styles.title}>Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Color.black,
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  title: {
    color: Color.white,
    fontFamily: Staatliches,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});

import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

import Color from '../colors';
import {OpenSansSemiBold, Staatliches} from '../fonts';
import MainLayout from '../components/layouts/MainLayout';

const Home = ({auth, navigation}) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.appname}>MR2 COLTIA</Text>
      <View style={styles.account}>
        <Text style={styles.label}>Account Name</Text>
        <Text style={styles.name}>{auth.name}</Text>
      </View>
    </View>
  );
  return <MainLayout header={renderHeader()}></MainLayout>;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  appname: {
    color: Color.white,
    fontFamily: Staatliches,
    marginBottom: 6,
    textAlign: 'center',
  },
  header: {
    backgroundColor: Color.black,
    padding: 12,
  },
  label: {
    color: Color.white,
    flex: 1,
    fontFamily: OpenSansSemiBold,
  },
  name: {
    color: Color.white,
    flex: 1,
    fontFamily: OpenSansSemiBold,
    textAlign: 'right',
  },
});

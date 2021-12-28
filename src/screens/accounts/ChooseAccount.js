import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../../components/Button';
import Color from '../../colors';
import Input from '../../components/Input';
import Rectangle from '../../components/geometris/Rectangle';
import SearchBar from '../../components/SearchBar';
import {OpenSansBold, Staatliches} from '../../fonts';

const ChooseAccount = ({accounts, createAccount, deleteAccount}) => {
  const [filtered, setFiltered] = useState(accounts);
  const [form, setForm] = useState('');
  const [search, setSearch] = useState('');

  const handleFormChange = text => setForm(text);
  const handleSearchChange = text => setSearch(text);

  const handleSearch = () =>
    setFiltered(
      accounts.filter(({name}) =>
        name.toLowerCase().includes(search.toLowerCase()),
      ),
    );

  const handleCreateAccount = () => {
    const account = {
      id: uuid(),
      name: form,
    };
    createAccount(account);
    saveAccounts(JSON.stringify([...accounts, account]));
    setFiltered([...filtered, account]);
  };

  const handleDeleteAccount = id => {
    const account = accounts.find(account => account.id === id);
    if (!account) return;

    deleteAccount(account);

    const filtered = accounts.filter(account => account.id !== id);
    saveAccounts(JSON.stringify(filtered));
    setFiltered([...filtered]);
  };

  const saveAccounts = async accounts => {
    try {
      await AsyncStorage.setItem('@accounts', accounts);
    } catch (error) {
      console.log(error);
    }
  };

  const renderAccounts = () =>
    filtered.map(({id, name}) => (
      <TouchableOpacity key={id} style={accountStyles.button}>
        <Rectangle
          size={54}
          style={accountStyles.rect}
          onPress={() => console.log('PICK')}
        />
        <View style={accountStyles.info}>
          <Text style={accountStyles.label}>Name</Text>
          <Text style={accountStyles.value}>{name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleDeleteAccount(id)}
          style={accountStyles.delete}>
          <Icon color={Color.white} name="delete" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
    ));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MR2 COLTIA</Text>
        <SearchBar onChangeText={handleSearchChange} onPress={handleSearch} />
      </View>
      <ScrollView style={styles.content}>{renderAccounts()}</ScrollView>
      <View style={styles.menu}>
        <Input
          label="Account Name"
          style={{container: {marginBottom: 12}}}
          onChangeText={handleFormChange}
        />
        <Button title="Create New Account" onPress={handleCreateAccount} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  accounts: state.accounts,
});

const mapDispatchToProps = dispatch => ({
  createAccount: account =>
    dispatch({type: 'CREATE_ACCOUNT', payload: account}),
  deleteAccount: account =>
    dispatch({type: 'DELETE_ACCOUNT', payload: account}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAccount);

const accountStyles = StyleSheet.create({
  button: {
    backgroundColor: Color.gray,
    flexDirection: 'row',
    paddingVertical: 12,
  },
  delete: {
    justifyContent: 'center',
    marginHorizontal: 12,
    padding: 6,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  label: {
    color: Color.white,
    fontFamily: OpenSansBold,
    fontSize: 12,
  },
  rect: {
    backgroundColor: '#333',
    borderRadius: 8,
    marginHorizontal: 12,
  },
  value: {
    color: Color.white,
    fontFamily: Staatliches,
    fontSize: 30,
    lineHeight: 34,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: Color.black,
    justifyContent: 'center',
    padding: 12,

    elevation: 5,
    shadowColor: Color.pure_black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menu: {
    backgroundColor: Color.black,
    padding: 12,

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    color: Color.white,
    fontFamily: Staatliches,
    marginBottom: 12,
  },
});

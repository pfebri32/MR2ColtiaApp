import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MONSTERS from '../json/monsters';
import SPECIES from '../json/species';

import Color from '../colors';
import MainLayout from '../components/layouts/MainLayout';
import SearchBar from '../components/SearchBar';
import {OpenSans, Staatliches} from '../fonts';

const MonsterCards = () => {
  const [activeModal, setActiveModal] = useState('breed');
  const [filtered, setFiltered] = useState(MONSTERS);
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState(false);
  const [species, setSpecies] = useState({
    breed: '',
    subbreed: '',
  });

  const handleChangeSearch = text => setSearch(text);
  const handlePick = (name, value = '') => {
    setSpecies({
      ...species,
      [name]: value,
    });
    handleCloseModal();
  };

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = name => {
    setActiveModal(name);
    setModal(true);
  };

  const handleSubmitSearch = () => {
    if (search === '') return setFiltered(MONSTERS);
    setFiltered([
      ...MONSTERS.filter(({name}) =>
        name.toLowerCase().includes(search.toLowerCase()),
      ),
    ]);
  };

  const renderCard = ({item, index}) => (
    <TouchableOpacity style={cardStyles.card(index === 0)}>
      <View style={cardStyles.header}>
        <Image source={item.img} style={cardStyles.image} />
        <View style={cardStyles.grade}>
          <Text style={cardStyles.gradeText}>{item.grade}</Text>
        </View>
      </View>
      <View style={{padding: 12}}>
        <View style={cardStyles.title}>
          <Text style={cardStyles.name}>{item.name}</Text>
          <Text style={cardStyles.breed}>Pixie / Pixie</Text>
        </View>
        <View style={{marginTop: 6}}>
          <Text style={cardStyles.label}>Description</Text>
          <Text style={cardStyles.value}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderHeader = () => (
    <View style={{backgroundColor: Color.black, padding: 12}}>
      <SearchBar
        value={search}
        onChangeText={handleChangeSearch}
        onPress={handleSubmitSearch}
        onSubmitEditing={handleSubmitSearch}
      />
      <View style={{flexDirection: 'row', marginHorizontal: -6}}>
        <View style={{flex: 1, marginTop: 12, paddingHorizontal: 6}}>
          <Text
            style={{
              color: Color.white,
              fontFamily: Staatliches,
              marginBottom: 4,
            }}>
            Breed
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Color.white,
              borderRadius: 4,
              height: 44,
              justifyContent: 'center',
              overflow: 'hidden',
              paddingHorizontal: 16,
            }}
            onPress={() => handleOpenModal('breed')}>
            <Text style={{color: Color.gray}}>
              {species.breed === '' ? 'Pick your breed...' : species.breed}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 12, paddingHorizontal: 6}}>
          <Text
            style={{
              color: Color.white,
              fontFamily: Staatliches,
              marginBottom: 4,
            }}>
            Sub-breed
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Color.white,
              borderRadius: 4,
              height: 44,
              justifyContent: 'center',
              overflow: 'hidden',
              paddingHorizontal: 16,
            }}
            onPress={() => handleOpenModal('subbreed')}>
            <Text style={{color: Color.gray}}>
              {species.subbreed === ''
                ? 'Pick your sub-breed...'
                : species.subbreed}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const renderOptions = () =>
    SPECIES.map(({id, name}) => {
      return (
        <TouchableOpacity
          key={id}
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={() => handlePick(activeModal, name)}>
          <Text
            style={{
              color: Color.white,
              fontFamily: Staatliches,
              fontSize: 32,
              padding: 12,
            }}>
            {name}
          </Text>
        </TouchableOpacity>
      );
    });
  return (
    <>
      <MainLayout header={renderHeader()}>
        <View style={{paddingHorizontal: 12}}>
          {filtered.length > 0 ? (
            <FlatList
              data={filtered}
              renderItem={renderCard}
              keyExtractor={item => item.id}
            />
          ) : (
            <View
              style={{
                backgroundColor: Color.red,
                borderRadius: 4,
                padding: 12,
                marginVertical: 12,
              }}>
              <Text
                style={{
                  color: Color.white,
                  fontFamily: Staatliches,
                  fontSize: 20,
                  textAlign: 'center',
                }}>
                Not exist.
              </Text>
            </View>
          )}
        </View>
      </MainLayout>
      <Modal animationType="fade" visible={modal} style={{flex: 1}}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: Color.black,
            flexDirection: 'row',
            height: 56,
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',

            top: 0,
            left: 0,
            zIndex: 1,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: Color.red,
              height: 56,
              justifyContent: 'center',
              position: 'absolute',
              width: 56,

              left: 0,
            }}
            onPress={handleCloseModal}>
            <Icon name="arrow-back" color={Color.white} size={22} />
          </TouchableOpacity>
          <Text
            style={{color: Color.white, fontFamily: Staatliches, fontSize: 22}}>
            {activeModal}
          </Text>
        </View>
        <ScrollView style={{backgroundColor: Color.dark_gray, flex: 1}}>
          <View
            style={{paddingVertical: Dimensions.get('window').height / 2 - 32}}>
            {renderOptions()}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{backgroundColor: Color.light_gray}}
          onPress={() => handlePick(activeModal)}>
          <Text
            style={{
              color: Color.black,
              fontFamily: Staatliches,
              fontSize: 20,
              padding: 16,
              textAlign: 'center',
            }}>
            Reset
          </Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default MonsterCards;

const cardStyles = StyleSheet.create({
  breed: {
    color: Color.light_gray,
    fontFamily: Staatliches,
    fontSize: 20,
  },
  card: isFirst => ({
    backgroundColor: Color.black,
    borderRadius: 8,
    marginBottom: 12,
    marginTop: isFirst ? 12 : 0,
  }),
  grade: {
    alignItems: 'center',
    backgroundColor: Color.dark_gray,
    borderTopRightRadius: 8,
    height: 48,
    justifyContent: 'center',
    position: 'absolute',
    width: 48,

    top: 0,
    right: 0,
  },
  gradeText: {
    color: Color.white,
    fontFamily: Staatliches,
    fontSize: 32,
  },
  header: {
    flexDirection: 'row',
    position: 'relative',
  },
  image: {
    borderRadius: 8,
    flex: 1,
  },
  label: {
    color: Color.white,
    fontFamily: Staatliches,
  },
  name: {
    color: Color.white,
    fontFamily: Staatliches,
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    color: Color.white,
    fontFamily: OpenSans,
    fontSize: 12,
  },
});

const styles = StyleSheet.create({});

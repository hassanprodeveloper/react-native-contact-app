import React from 'react';
import {StyleSheet, FlatList, View, Text, Pressable} from 'react-native';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputField from '../components/InputsField';

const AddContact = () => {
  const inputs = [
    {
      id: 'name',
      labelValue,
      placeholderText,
      disable,
      iconType,
      ...rest
    },
    {
      id: 'number',
      labelValue,
      placeholderText,
      disable,
      iconType,
    },
  ];
  return (
    <>
      <Header title="Details" showAddBtn="none" />
      <View style={styles.AddContactScreen}>
        <EvilIcons name="user" size={150} color="#000" />
      </View>
      <View style={styles.AddContactScreen_buttonSection}>
        <FlatList
          data={inputs}
          renderItem={({item}) => <InputField />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  AddContactScreen: {
    // flex: 1,
    alignItems: 'center',
    // padding: 20,
    paddingTop: 100,
  },
  AddContactScreen_buttonSection: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
    // paddingTop: 100,
  },
  contactNameText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  contactNumberText: {
    fontSize: 20,
    //   fontWeight: 'bold',
  },
  btn: {
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    paddingVertical: 6,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

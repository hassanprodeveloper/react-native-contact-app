import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Text, Pressable} from 'react-native';
import Header from '../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputField from '../components/InputsField';
import FormButton from '../components/FormButton';

const EditContact = ({route}) => {
  const contact = route.params
  const [name, setname] = useState(contact.name);
  const [number, setnumber] = useState(contact.number);
  // console.log(name, number);
  return (
    <>
      <Header title="Edit Contact" showEditBtn="none" showAddBtn="none" />
      <View style={styles.EditContactScreen}>
        <EvilIcons name="user" size={150} color="#000" />
      </View>
      <View style={styles.EditContactScreen_buttonSection}>
        <InputField
          onChangeText={(e) => setname(e)}
          labelValue={name}
          placeholderText="Contact Name"
          iconType="user"
        />
        {/*  */}
        <InputField
          onChangeText={(e) => setnumber(e)}
          labelValue={number}
          placeholderText="Contact number"
          iconType="mobile1"
        />
        <FormButton buttonTitle="Update Contact" onPress={() => {}} />
      </View>
    </>
  );
};

export default EditContact;

const styles = StyleSheet.create({
  EditContactScreen: {
    // flex: 1,
    alignItems: 'center',
    // padding: 20,
    paddingTop: 100,
  },
  EditContactScreen_buttonSection: {
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

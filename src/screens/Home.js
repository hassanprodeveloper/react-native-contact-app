import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Header from '../components/Header';
import {connect} from 'react-redux';
import ContactCard from '../components/ContactCard';

const Home = ({navigation, contactList}) => {
  return (
    <View>
      <Header
        title="Contacts"
        showEditBtn="none"
        headerAddIconFunction={() => navigation.navigate('AddContact')}
      />
      <FlatList
        data={contactList}
        renderItem={({item}) => (
          <ContactCard
            navigation={navigation}
            id={item.id}
            contactName={item.name}
            contactNumber={item.number}
            contactDetails={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state,
  };
};
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

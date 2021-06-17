import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Header from '../components/Header';
import {connect} from 'react-redux';
import ContactCard from '../components/ContactCard';

const Home = ({contactList}) => {
    return (
        <View>
      <Header title="Contacts" />
      <FlatList
        data={contactList}
        renderItem={({item}) => (
          <ContactCard
            id={item.id}
            contactName={item.name}
            contactNumber={item.number}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
    console.log(state);
    
    return  {
  contactList: state,
}};
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

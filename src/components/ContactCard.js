import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {connect} from 'react-redux';

const ContactCard = ({navigation, id, contactName, contactNumber}) => {
  return (
    <>
      <Pressable style={styles.contactCard_mainCont} onPress={() => {}}>
        <View id={id} style={styles.contactCard_Cont}>
          <Text style={styles.contactCard_text}>{contactName}</Text>
          <Text style={styles.contactCard_number}>{contactNumber}</Text>
        </View>
      </Pressable>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   todoArr: state.todos,
// });
const mapDispatchToProps = (dispatch) => ({
  //   deleteTodo: (data) => dispatch(deleteTodo(data)),
  //   todoStatus: (data) => dispatch(todoStatus(data)),
});
export default connect(null, mapDispatchToProps)(ContactCard);
// ----------------- Style below
const styles = StyleSheet.create({
  contactCard_mainCont: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    marginVertical: 10,
  },
  contactCard_Cont: {
    height: 50,
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
  },
  contactCard_text: {
    fontSize: 20,
  },
  contactCard_number: {
    fontSize: 15,
  },
});

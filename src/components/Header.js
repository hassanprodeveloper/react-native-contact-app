import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowWidth, windowHeight} from '../assets/Dimensions';

const Header = ({navigation, title , showAddBtn}) => {
  return (
    <>
      <View style={styles.HeaderCont}>
        <View style={styles.headerTitleCont}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.headerIconsCont}>
          <Pressable onPress={() => console.log('edit btn pressed')}>
            <Text style={styles.headerEditText}>Edit</Text>
          </Pressable>

          <Ionicons
            onPress={() => console.log('plus btn pressed')}
            style={{...styles.headerPlusIcon, display: showAddBtn}}
            name="add"
            size={30}
            color="#000"
          />
        </View>
      </View>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  HeaderCont: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  headerTitleCont: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    textAlign: 'center',
  },
  headerIconsCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headerEditText: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerPlusIcon: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

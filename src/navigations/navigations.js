import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from './screens';

const {Screen, Navigator} = createStackNavigator();

const Navigations = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Screens.Home} />
        <Screen name="AddContact" component={Screens.AddContact} />
        <Screen name="ContactInfo" component={Screens.ContactInfo} />
        <Screen name="EditContact" component={Screens.EditContact} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Navigations from './src/navigations/navigations'

const App =() => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-light" />
      <Navigations />
     </Provider>
  );
};

const styles = StyleSheet.create({
})
export default App;

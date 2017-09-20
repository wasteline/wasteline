import React, {Component} from 'react';
import App from './containers/AppContainer';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './../redux/store';
import mockData from './../data/data.json';

let initialState = {
  items: mockData,
  currentProfile: {},
  showItem: false, 
  upvotes: 0
};

let store = configureStore(initialState);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Main;
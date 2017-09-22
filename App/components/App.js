import React, {Component} from 'react';
import Landing from './../containers/LandingContainer';
import Profile from './../containers/ProfileContainer';
import FormView from './../containers/FormViewContainer';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Landing: { 
    screen: Landing },
  Profile: { screen: Profile },
  FormView: { screen: FormView },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
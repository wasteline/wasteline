import React, {Component} from 'react';
import Landing from './../containers/LandingContainer';
import Profile from './../containers/ProfileContainer';
import FormView from './../containers/FormViewContainer';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Landing: { 
    screen: Landing,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  },
  Profile: { 
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Product Info'
    }),
  },
  FormView: { 
    screen: FormView,
    navigationOptions: ({navigation}) => ({
      title: 'Upload'
    }),
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
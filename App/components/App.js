import React, {Component} from 'react';
import Landing from './../containers/LandingContainer';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Landing />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  direction: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
});
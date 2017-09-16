import React, {Component} from 'react';
import Landing from './../containers/LandingContainer';
import Profile from './../containers/ProfileContainer';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Landing: { screen: Landing },
  Profile: { screen: Profile },
});

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Landing />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48d1cc'
  },
  direction: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
});

export default App;
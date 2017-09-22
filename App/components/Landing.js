import React, { Component } from 'react';
import Header from './Header';
import AddIcon from './../icons/AddIcon';
import Footer from './Footer';
import { 
  StyleSheet, 
  View,
  NativeModules,
  LayoutAnimation
} from 'react-native';
import dismissKeyboard from 'react-native-dismiss-keyboard';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'center',
      paddingTop: 0
    };
  }

  handlePosition() {
    LayoutAnimation.spring();
    this.setState({
      position: 'flex-start',
      paddingTop: 20
    });
  }
  
  render() {
    return (
      <View style={[styles.container, ]}>
       
        <Header 
          props={this.props} 
          handlePosition={this.handlePosition.bind(this)} 
          position={this.state.position}
          paddingTop={this.state.paddingTop} 
          />
        
        {/* <Footer props={this.props} /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
  },  
});
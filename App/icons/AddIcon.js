import React, { Component } from 'react';
import { 
    Icon 
  } from 'react-native-elements';

export default class AddIcon extends Component {
  render() {
    return (
        <Icon
        name='plus'
        type='evilicon'
        color='white'
        size={50}
      />  
    );
  }
}

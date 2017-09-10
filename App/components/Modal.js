import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';

export default class Modal extends Component {

      state = {
        modalVisible: true,
      }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
      render() {
        return (
          <View style={{marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>
    
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
    
              </View>
              </View>
            </Modal>
    
            <TouchableHighlight onPress={() => {
              this.setModalVisible(true)
            }}>
              <Text>Show Modal</Text>
            </TouchableHighlight>
    
          </View>
        );
      }
    }
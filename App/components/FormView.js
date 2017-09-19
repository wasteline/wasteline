import React, { Component } from 'react';
import ImageUploader from './ImageUploader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import dismissKeyboard from 'react-native-dismiss-keyboard';


import {
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage,
  Button,
  Icon 
} from 'react-native-elements';

export default class FormView extends Component {
  state = {
    input:'',
    image:null,
    isInputTouched:false,
  }
  handleKeyboard(){
    if(this.state.isInputTouched){
      dismissKeyboard();
      this.setState({
        isInputTouched:false
      })
    }
  }

  handleInputTouch(){
    this.setState({
      isInputTouched:true
    })
  }

  handleImage(image){
    this.setState({
      image:image
    })
  }
  handleConfirm(){
    if(this.state.image){
      if(!this.state.image.cancelled){
        return (
          <View style={{alignItems: 'center'}}>
          <Icon
            name='check'
            type='evilicon'
            color='#517fa4'
            size={40}
          />
          <Text>Attached</Text>
        </View>
        )
      }else{
        return null;  
      }
    }else{
      return null;
    }
  }

  handleSubmit(){
    let imgUri = this.state.image.uri;
    let productInfo = {
      productName:this.state.input
    }
    let formData = new FormData();
    formData.append('photo',this.state.image);
    formData.append('product',productInfo);
    console.log(formData)
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    // return fetch(apiUrl, options);

  }
  render() {
    return (
      <View style={styles.container}
       onTouchEnd={()=>{this.handleKeyboard();}}>
        <View style={styles.FormContainer}>
          <FormLabel>Product Name</FormLabel>
          <FormInput 
            onChangeText={input => this.setState({input})} 
            required 
            placeholder='Enter Product Name' 
            onTouchEnd={()=>{this.handleInputTouch()}} />
          <FormValidationMessage>Error message</FormValidationMessage>
        </View>

        <View style={styles.ImageUploaderContainer}>
          <FormLabel>Upload Product Image</FormLabel>
          <ImageUploader 
            handleImage={this.handleImage.bind(this)}/>
          {this.handleConfirm()}
        </View>

        <View>
          <Button
            style={{margin:20}}
            backgroundColor='dodgerblue'
            raised
            title='SUBMIT' 
            onPress={this.handleSubmit.bind(this)}
            />
        </View>

          <Text>Image to be uploaded</Text>
          <Text>{JSON.stringify(this.state.image)}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent:'center'
  },
  FormContainer:{
    flex:3
  },
  ImageUploaderContainer:{
    flex:2
  },
  label: {
    fontSize: 20,
  }
});

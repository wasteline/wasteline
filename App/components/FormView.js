import React, { Component } from 'react';
import ImageUploader from './ImageUploader';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import renderIf from './../helper/renderIf'

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
    image:{cancelled:true},
    isInputTouched:false,
    validation:false
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
          <View style={styles.ConfirmContainer}>
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
    let apiUrl = 'http://localhost:3001/api/image';
    let uri = this.state.image.uri;
    let productInfo = this.state.input
    let uriParts = uri.split('/');
    let fileName = uriParts[uriParts.length - 1];
    let fileType = uriParts[uriParts.length - 1].split('.')[1];
    let formData = new FormData();
    
    formData.append('photo', {
      uri,
      name: `${fileName}`,
      type: `image/${fileType}`
    });
    
    formData.append('product',this.state.input);
    
    let options = {
      method: 'post',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
  
    fetch(apiUrl, options)
    .then((response)=>response.json())
    .then(responseJson => {
      this.props.changeProfile({
        object:this.state.input,
        image_url:'https://s3-us-west-1.amazonaws.com/fifatalk/' + responseJson
      });
      this.props.navigation.navigate('Profile');
    })
    .catch(err =>{
      console.log("Error Message:",err)
    })

  }
  render() {
    // console.log('FormView props:',this.props)
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
          <FormValidationMessage>*required</FormValidationMessage>
        </View>

        <View style={styles.ImageUploaderContainer}>
          <FormLabel>Upload Product Image</FormLabel>
          <ImageUploader 
            handleImage={this.handleImage.bind(this)}/>
        </View>
          {this.handleConfirm()}

        <View style={styles.FormSubmitContainer}>
          <Button
            style={{margin:20}}
            backgroundColor='dodgerblue'
            raised
            title='SUBMIT'
            disabled={this.state.input.length === 0 || this.state.image.cancelled} 
            onPress={this.handleSubmit.bind(this)}
            />
        </View>

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
  label: {
    fontSize: 20,
  },
  FormContainer:{
    flex:2
  },
  ImageUploaderContainer:{
    flex:3,
    alignItems:'center'
  },
  ConfirmContainer:{
    flex:1,
    alignItems:'center'
  },
  FormSubmitContainer:{
    flex:1
  }
});

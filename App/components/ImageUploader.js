import React from 'react';
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
  Button 
} from 'react-native-elements';
import Exponent, { Constants, ImagePicker, registerRootComponent } from 'expo';

const styles =StyleSheet.create({
  ImageUploaderButtonContainer:{
    alignItems: 'center',
    margin:20,
  },
})

export default class ImageUploader extends React.Component {
  state = {
    image: null,
    uploading: false,
  };
  
  render() {
    let { image } = this.state;
    // console.log(this.props);
    return (
      <View style={styles.ImageUploaderButtonContainer}>
        <Button
          style={{width:200,marginBottom:10}}
          raised
          icon={{name: 'photo',size:30}}
          type='evilicon'
          title="Gallery"
          onPress={this._pickImage}
        />

        <Button 
          style={{width:200}}
          raised
          icon={{name: 'camera',size:30}}
          type='evilicon'
          title="Take a Photo" 
          onPress={this._takePhoto} 
          />

        <StatusBar barStyle="default" />

      </View>
    );
  }
  
  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };
  
  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }
    
    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
          shadowColor: 'rgba(0,0,0,1)',
          shadowOpacity: 0.2,
          shadowOffset: { width: 4, height: 4 },
          shadowRadius: 5,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          {image}
        </Text>
      </View>
    );
  };
  
  _share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image,
    });
  };
  
  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };
  
  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this.props.handleImage(pickerResult);
  };
  
  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this.props.handleImage(pickerResult)
  };
}
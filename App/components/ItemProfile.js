import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage,
  Button 
} from 'react-native-elements';
import MapView from 'react-native-maps';
import GooglePlacesAutocomplete from 'react-native-google-places-autocomplete';
import { GOOGLE_GEOCODE_KEY } from 'react-native-dotenv';

const binType = (color) => {
  //refine as needed
  let type, icon;
  switch (color) {
  case 'recycle_bin': type = 'Recycle', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-blue.png';
    break;
  case 'compost': type = 'Compost', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-green.png';
    break;
  case 'landfill': type = 'Landfill', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-black.png';
    break;    
  case 'recyclable_elsewhere': type = 'Recyclable elsewhere', icon = 'https://cdn4.iconfinder.com/data/icons/recycle-and-environment-vol-2/600/home-Building-estate-house-Conservation-green-recycle-recycling-Ecology-environment-packaging-512.png';
  }
  return icon;
};

const styles = StyleSheet.create({
  tableCell: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  locationInput: {
    height: 50,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ffffff',
    paddingLeft: 5
  }
});

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleUpvote = this.handleUpvote.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.state = {
      mapLocation: '',
      inputDisplay: 'none',
      locationDisplay: 'flex',
      region: {}
    };
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=${GOOGLE_GEOCODE_KEY}`)
        .then((response) => response.json())
        .then(({ results }) => {
          this.setState({ mapLocation: results[0].formatted_address });
        });
      this.setState({
        region: {
          latitude: coords.latitude,
          longitude: coords.longitude,   
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }
      });
    }, null, { enableHighAccuracy: true }
    );
  }
  
  relocateMap(address) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(/ /g, '+')}&key=${GOOGLE_GEOCODE_KEY}`)
      .then((response) => response.json())
      .then(({ results }) => {
        console.log(results);
        this.setState({
          region: {
            latitude: results[0].geometry.location.lat,
            longitude: results[0].geometry.location.lng,   
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,          
          } 
        });
      });
  }
  
  handleUpvote() {
    console.log('hiiiiiiii');
    this.props.upvote();
  }

  renderComments() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 9}}>Maecenas libero est, sagittis quis tempus efficitur, posuere in diam. Etiam dignissim pulvinar velit eu varius.</Text>
        <View style={{flexDirection: 'column'}}>
          <Text>&#x2191;</Text>
          <Text>&#x2193;</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flexDirection: 'column', marginTop: 30 }}>
        <Text style={{ fontSize: 20, margin: 10 }}>{this.props.currentProfile.object}</Text>
        <View style={{ alignItems: 'center' }}>
          <Image style={{ height: 200, width: 300 }} source={{ uri: this.props.currentProfile.image_url }} />
        </View>
        <View>
          <TouchableHighlight onPress={() => {
            this.setState({ inputDisplay: 'flex', locationDisplay: 'none' });
          }}>
            <Text style={{ display: this.state.locationDisplay }}>Location: {this.state.mapLocation}</Text>
          </TouchableHighlight>
          <TextInput onSubmitEditing={({ nativeEvent }) => {
            this.setState({
              locationDisplay: 'flex',
              inputDisplay: 'none',
              mapLocation: nativeEvent.text
            });
            this.relocateMap(nativeEvent.text);
          }}
            style={[styles.locationInput, { display: this.state.inputDisplay, height: 20 }]}
            placeholder='Address, City, State'
          >
          </TextInput>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.tableCell, { height: 100, width: '50%', alignItems: 'center' }]}>
            {/* <Image style={{ height: 70, width: 70 }} source={{ uri: binType(item.bin)[1] }} /> */}
            <TouchableHighlight onPress={() => {
              this.setState({ mapLocation: '2915 16th St, San Francisco, CA 94103' });
              this.relocateMap('2915 16th St, San Francisco, CA 94103'); 
            }}>  
              <Image style={{ height: 70, width: 70 }} source={{uri: binType(this.props.currentProfile.instruction)}} />
            </TouchableHighlight>
            <Text>{this.props.currentProfile.instruction}</Text>
          </View>
          <View style={[styles.tableCell, { height: 100, width: '50%', alignItems: 'center' }]}>
            <MapView style={styles.map} region={this.state.region}>
              <MapView.Marker
                coordinate={{
                  latitude: 37.7650,
                  longitude: -122.4180,
                }}
                title={'eWasteSF Electronics Recycling'}
                description={`Free Recycling/ Data Wipe for Computers, Cell Phones, Tablets and wire/cords.
Data Destruction/ Wipe is free for computers,cell ph & all storage devices. 
All electronics are ok for drop off. Appliances, TV's,  printers and general household electronics have a cost to recycle. See ewastesf.com for any cost associated with recycling.
`}
              />
            </MapView>
          </View>
        </View>
        <View style={ styles.tableCell }>
          <Text>Brand name</Text>
        </View>      
        <View style={ styles.tableCell }>
          {/* <Text>Material type: {item.material}</Text> */}
          <Text>Material type: {this.props.currentProfile.material}</Text>
        </View>
        <View style={ styles.tableCell }>
          <Text>Top Comments</Text>
          {this.renderComments()}
        </View>
        <Button title="Join discussion" />
      </View>
    );
  }
}
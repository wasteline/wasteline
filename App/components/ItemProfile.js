import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

// const binType = (color) => {
//   //refine as needed
//   let type, icon;
//   switch (color) {
//   case 'blue': type = 'Recycle', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-blue.png';
//     break;
//   case 'green': type = 'Compost', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-green.png';
//     break;
//   case 'black': type = 'Waste', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-black.png';
//     break;    
//   }
//   return [type, icon];
// };

const styles = StyleSheet.create({
  tableCell: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
  }
});

export default class Profile extends Component {
  constructor(currentProfile) {
    super(currentProfile);

  }
  render(){
    return (
      <View style={{ flexDirection: 'column', marginTop: 30 }}>
        <Text style={{ fontSize: 20, margin: 10 }}>{currentProfile.object}</Text>
        <Image style={{ height: 200, width: 300 }} source={{ uri: currentProfile.image_url }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.tableCell, { height: 100, width: '50%', alignItems: 'center' }]}>
            {/* <Image style={{ height: 70, width: 70 }} source={{ uri: binType(item.bin)[1] }} /> */}
            {/* <Text>{binType(item.bin)[0]}</Text> */}
          </View>
          <View style={[styles.tableCell, { height: 100, width: '50%', alignItems: 'center' }]}>
            <Text>placeholder</Text>
          </View>
        </View>
        <View style={ styles.tableCell }>
          {/* <Text>Brand name: {item.brand}</Text> */}
          <Text>Brand name</Text>
        </View>      
        <View style={ styles.tableCell }>
          {/* <Text>Material type: {item.material}</Text> */}
          <Text>Material type</Text>
        </View>
        <View style={ styles.tableCell }>
          <Text>Button placeholder to vote on usefulness</Text>
          <Text> 3 </Text>
        </View>
      </View>
    )
  }

} 

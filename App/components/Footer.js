import React, { Component } from 'react';
import AddIcon from './../icons/AddIcon';
import { 
  Text, 
  TouchableOpacity, 
  View,
} from 'react-native';
const Footer = ({props}) =>(
  <View style={[styles.LadningFooter]}>
    <View style={styles.LadningFooterText}>
      <Text>FOOTER PLACE HOLDER1</Text>
    </View>
    <View style={styles.LadningFooterIcon}>
      <TouchableOpacity>
        <Text>TOUCH PLACE HOLDER</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = {
  LadningFooter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-around'
  },
  LadningFooterText: {
    justifyContent: 'center'
  },
  LadningFooterIcon: {
    justifyContent: 'center'
  }
};
export default Footer;
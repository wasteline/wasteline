import React, {Component} from 'react';
import { 
  StyleSheet, 
  FlatList, Image, 
  Modal, 
  Text, 
  TextInput, 
  TouchableHighlight,
  TouchableOpacity, 
  View
 } from 'react-native';

import { List, ListItem, SearchBar } from 'react-native-elements';

import { connectSearchBox } from 'react-instantsearch/connectors';

const SearchBox = connectSearchBox(({handlePosition, refine, currentRefinement, props }) => {
    
  return (
    <SearchBar 
    placeholder="Product Name" 
    lightTheme round
    showLoadingIcon={false}
    onChangeText={(text) => { 
      if (text.length === 1) {
        props.showItemList();
      }
      if (text.length === 0) {
        props.HideItemList();
      }
      refine(text); 
    }}
     />
  );
});

const styles = {
  SearchInputBox: {
    height: 50,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ffffff',
    paddingLeft: 5
  }
};

export default SearchBox;
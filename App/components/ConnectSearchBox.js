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

import { connectSearchBox } from 'react-instantsearch/connectors';

const SearchBox = connectSearchBox(({ refine, currentRefinement, props }) => {
    
  const styles = {
    height: 50,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ffffff',
    padding: 10,
    margin: 10,
    flex: 1,
  };
    
  return (
        <TextInput
          style={styles}
          onChangeText={(text) => { 
            if (text.length === 1) {
              props.showItemList();
            }
            if (text.length === 0) {
              props.HideItemList();
            }
            refine(text); 
          }}
          value={currentRefinement}
          placeholder={'Search a product...'}
          clearButtonMode={'always'}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
  );
});

export default SearchBox;
import React, {Component} from 'react';
import { 
  StyleSheet, 
  FlatList, Image, 
  Modal, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  View
 } from 'react-native';

import { connectSearchBox } from 'react-instantsearch/connectors';

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
    
  const styles = {
    height: 60,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    flex: 1,
  };
    
  return (
        <TextInput
          style={styles}
          onChangeText={text => refine(text)}
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
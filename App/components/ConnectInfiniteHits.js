import React, {Component} from 'react';
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import { 
  StyleSheet, 
  FlatList, 
  Image, 
  Modal, 
  Text, 
  TextInput, 
  TouchableHighlight, 
  View
 } from 'react-native';

const Hits = connectInfiniteHits(({ hits, hasMore, refine }) => {
  
    /* if there are still results, you can
    call the refine function to load more */
  const onEndReached = function() {
    if (hasMore) {
      refine();
    }
  };
  
  return (
      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: item.image_url }}
              />
              <View style={{ flex: 1 }}>
                <Text>
                  {item.object}
                </Text>
              </View>
            </View>
          );
        }}
      />
  );
});

export default Hits;
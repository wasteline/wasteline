import React, {Component} from 'react';
import { connectInfiniteHits } from 
'react-instantsearch/connectors';
import { 
  StyleSheet, 
  FlatList, 
  Image, 
  Modal, 
  Text, 
  TextInput, 
  TouchableHighlight,
  TouchableOpacity, 
  View
 } from 'react-native';

const Hits = connectInfiniteHits(({ hits, hasMore, refine, props }) => {
  
    /* if there are still results, you can
    call the refine function to load more */
  const onEndReached = function() {
    if (hasMore) {
      refine();
    }
  };

  const handleProfile = (target) => {
    props.changeProfile(target);
  };
  
  return (
      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{ handleProfile(item); }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={{ uri: item.image_url }}
                />
                <View>
                  <Text>
                    {item.object}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
  );
});

export default Hits;
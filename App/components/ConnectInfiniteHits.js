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
    props.navigation.navigate('Profile');
  };

  const styles = {
    container: {
      flexDirection: 'row', 
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: 'white' 
    },
    imgSize: {
      height: 100, width: 100,
      borderRadius: 50, 
    },
    titleContainer: {
    
    },
    itemTitle: {
      color: 'white',
      marginLeft: 10
    }
  };
  
  return (
      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity onPress={()=>{ handleProfile(item); }}>
              <View style={styles.container}>
                <Image
                  style={styles.imgSize}
                  source={{ uri: item.image_url }}
                />
                <View style={styles.titleContainer}>
                  <Text style={styles.itemTitle}>
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
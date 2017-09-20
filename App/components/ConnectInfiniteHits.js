import React, {Component} from 'react';
import { connectInfiniteHits } from 
'react-instantsearch/connectors';
import renderIf from './../helper/renderIf';
import AddIcon from './../icons/AddIcon';
import {  
  View,
  Text,  
  Image,  
  FlatList, 
  TouchableOpacity, 
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

  const _renderItem = ({item}) =>{
    return (
      <TouchableOpacity onPress={()=>{ handleProfile(item); }}>
        <View style={styles.ItemListContainer}>
          <View style={styles.ImageContainer}>
          <Image
            style={styles.imgSize}
            source={{ uri: item.image_url }}
          />
          </View>
          <View style={styles.ItemTitleContainer}>
            <Text style={styles.itemTitle}>
              {item.object}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={_renderItem}
      />
      <View style={[styles.ItemListContainer, {justifyContent: 'space-around', padding: 5}]}>
          <View style={[{justifyContent: 'center'}]}>
            <Text style={styles.itemTitle}>Do not see your Product?</Text>
          </View>
          <View style={styles.ItemIcon}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('FormView')}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>
    </View>  
  );
});

const styles = {
  ItemListContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'white', 
  },
  ImageContainer: {
    padding: 10
  },
  imgSize: {
    height: 50, 
    width: 50,
  },
  ItemTitleContainer: {
  
  },
  itemTitle: {
    color: 'white',
    marginLeft: 10
  },
  ItemIcon: {
    justifyContent: 'center'
  }
};

export default Hits;
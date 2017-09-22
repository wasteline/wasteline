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
  ActivityIndicator,
 } from 'react-native';

import {
  List,
  ListItem
} from 'react-native-elements';

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

  renderFooter = () => {
    return (
       <View style={[styles.ItemListContainer, {justifyContent: 'space-around', padding: 5}]}>
           <View>
             <Text>Do not see your Product?</Text>
           </View>
           <View >
             <TouchableOpacity onPress={()=>props.navigation.navigate('FormView')}>
               <AddIcon />
             </TouchableOpacity>
           </View>
        </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  return (
    <List style={styles.ListContainer}>
      <FlatList
        data={hits}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => (
          <ListItem style={styles.ListItem}
            roundAvatar
            title={`${item.object}`}
            avatar={{ uri: item.image_url }}
            containerStyle={{ borderBottomWidth: 0 }}
            onPress={()=>{ handleProfile(item); }}
          />
        )}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
      />
    </List> 
  );
});

const styles = {
  ListContainer: {   
    paddingLeft: 10,
    paddingRight: 10, 
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  ListItem: {
    padding: 5,
    backgroundColor: '#efefef',
    borderRadius: 2
  },
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
    color: 'black',
    marginLeft: 10
  },
  ItemIcon: {
    justifyContent: 'center'
  }
};

export default Hits;
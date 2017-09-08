import React, {Component} from 'react';
import { InstantSearch } from 'react-instantsearch/native';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';

import { connectInfiniteHits,   connectSearchBox, } from 'react-instantsearch/connectors';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ModalExample />
        <InstantSearch
          appId="NSUTPVU7Z2"
          apiKey="258477ff2fa8efd092747ceed6cbb0a7"
          indexName="test_WASTE"
        >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <SearchBox />
        </View>
        <Hits/>
        </InstantSearch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

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
    
  class ModalExample extends Component {

      state = {
        modalVisible: true,
      }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
      render() {
        return (
          <View style={{marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
              <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>
    
                <TouchableHighlight onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
    
              </View>
              </View>
            </Modal>
    
            <TouchableHighlight onPress={() => {
              this.setModalVisible(true)
            }}>
              <Text>Show Modal</Text>
            </TouchableHighlight>
    
          </View>
        );
      }
    }
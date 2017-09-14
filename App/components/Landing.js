import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/native';
import Hits from './ConnectInfiniteHits';
import SearchBox from './ConnectSearchBox';
import renderIf from './../helper/renderIf';
import { StyleSheet, 
  FlatList, 
  Image, 
  Modal, 
  Text, 
  TextInput, 
  TouchableHighlight,
  TouchableOpacity, 
  View
} from 'react-native';

export default class Landing extends Component {

  render() {
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>WasteLine</Text>
      <InstantSearch
        appId="NSUTPVU7Z2"
        apiKey="258477ff2fa8efd092747ceed6cbb0a7"
        indexName="test_WASTE"
      >
      <View style={styles.direction}>
        <SearchBox props={this.props}/>
      </View>
      {/* ----- uncomment below to load data from rudux store ----- */}
      {/* <FlatList
        data={this.props.items}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: item.imgUrl }}
              />
            <View style={{ flex: 1 }}>
              <Text>
                {item.name}
              </Text>
            </View>
          </View>
          );
        }} /> */}
        {renderIf(this.props.showItem, <Hits props={this.props}/>)}
      </InstantSearch>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#48d1cc'
  },
  header: {
    fontSize: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  direction: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
});
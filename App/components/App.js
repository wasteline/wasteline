import React, {Component} from 'react';
import { InstantSearch } from 'react-instantsearch/native';
import Hits from './ConnectInfiniteHits';
import SearchBox from './ConnectSearchBox';
import { StyleSheet, FlatList, Image, Modal, Text, TextInput, TouchableHighlight, View, } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <InstantSearch
          appId="NSUTPVU7Z2"
          apiKey="258477ff2fa8efd092747ceed6cbb0a7"
          indexName="test_WASTE"
        >
        <View style={styles.direction}>
          <SearchBox />
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
  direction: {
    flexDirection: 'row', 
    alignItems: 'center'
  }
});
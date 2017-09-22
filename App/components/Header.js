import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/native';
import Hits from './ConnectInfiniteHits';
import SearchBox from './ConnectSearchBox';
import renderIf from './../helper/renderIf';
import { 
  Text,  
  View,
} from 'react-native';

const Header = ({props, handlePosition, paddingTop, position}) => (
  <View style={[styles.LandingHeader,
     {justifyContent: position, paddingTop: paddingTop}]}>
    {renderIf(position === 'center',
      <Text style={[styles.LandingHeaderText]}>
        WasteLine
      </Text>)}
    <View onTouchEnd={()=>handlePosition()}
      style={[styles.SearchBoxContainer]}>
      <InstantSearch
        appId="NSUTPVU7Z2"
        apiKey="258477ff2fa8efd092747ceed6cbb0a7"
        indexName="test_WASTE">
        <SearchBox props={props} />
        {renderIf(props.showItem, <Hits props={props}/>)}
      </InstantSearch>
    </View>
</View>
);

const styles = {
  LandingHeader: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  LandingHeaderText: {
    fontSize: 40,
    padding: 5
  },
  SearchBoxContainer: {
    alignSelf: 'stretch',
    // backgroundColor: 'blue',
    // padding: 5
  },
};

export default Header;
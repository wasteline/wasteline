import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './reducers';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore);

const configure = (initialState = {items: [], currentProfile: {}, listedItemNum: 0, showItemList: false}) => {
  return finalCreateStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 
};
export default configure;

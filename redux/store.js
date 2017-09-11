import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './reducers';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(logger)
)(createStore);

const configure = (initialState = {items: []}) => {
  return finalCreateStore(reducer, initialState); 
};
export default configure;

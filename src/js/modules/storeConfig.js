import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.js';

export default function storeConfig() {
  return createStore(
      rootReducer,
      composeWithDevTools(
          applyMiddleware(thunk),
      ),
  );
};

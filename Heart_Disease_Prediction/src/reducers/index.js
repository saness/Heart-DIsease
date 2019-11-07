import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './RootReducer';

const persistConfig = {
  key: 'root12',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //perisiting the root reducer

const rootStore = createStore(
  persistedReducer,
  applyMiddleware(thunk), //applying redux-thunk
);

export const store = rootStore; 

export const persist = callback => persistStore(rootStore, null, callback);//persisting the store

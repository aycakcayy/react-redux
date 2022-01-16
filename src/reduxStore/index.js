import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'; //localstorage kullanmak için yardımcı paket
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import counterReducer from './counter';
import tasksReducer from './tasks';

//root bilgilerini birleştirme
const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: tasksReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['counter'], //sadece counter'ı tut localde tutar
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

// store.subscribe(() => console.log('store:::', store.getState()));

export const persistor = persistStore(store);
export default store;

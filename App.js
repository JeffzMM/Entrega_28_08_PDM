import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import NavContato from './navigation/NavContato';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contactsReducers from './store/contact-reducers';

const rootReducer = combineReducers({ 
  contacts: contactsReducers
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavContato />
    </Provider>
  );

}

const styles = StyleSheet.create({
  telaPrincipal: {
    backgroundColor: '#fff',
    padding: 50
  },
  lembreteTxt: {
    borderBottomColor: '#000', borderBottomWidth: 2, marginBottom: 4, textAlign: 'center'
  },
  itemListaView: {
    padding: 12,
    backgroundColor: '#ddd',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
  entradaView: {
    marginBottom: 8
  }
});

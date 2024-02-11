import { Tuple, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NODE_ENV, EXPO_STORE_KEY } from '@env'

import reducers from './reducers/reducer';

const persistedReducer = persistReducer({
    key: `${EXPO_STORE_KEY}`,
    version: 1,
    storage: AsyncStorage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk),
    devTools: NODE_ENV !== 'production'
})


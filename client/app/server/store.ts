import { Tuple, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from './reducers/reducer';

const persistedReducer = persistReducer({
    key: "general_culture_k",
    version: 1,
    storage: AsyncStorage
}, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => new Tuple(thunk),
    devTools: process.env.NODE_ENV !== 'production'
})


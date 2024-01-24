import { Tuple, configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import userReducer from './reducers/user.reducer';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: () => new Tuple(thunk),
    devTools: process.env.NODE_ENV !== 'production'
})


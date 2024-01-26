import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './user.reducer';
import responseReducer from './response.reducer';

export default combineReducers({
    user: userReducer,
    response: responseReducer
})
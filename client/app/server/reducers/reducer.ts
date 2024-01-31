import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './user.reducer';
import gameReducer from './game.reducer';
import responseReducer from './response.reducer';

export default combineReducers({
    user: userReducer,
    game: gameReducer,
    response: responseReducer
})
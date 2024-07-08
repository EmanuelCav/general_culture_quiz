import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './user.reducer';
import dashboardReducer from './dashboard.reducer';
import responseReducer from './response.reducer';

export default combineReducers({
    user: userReducer,
    dashboard: dashboardReducer,
    response: responseReducer
})
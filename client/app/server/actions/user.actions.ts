import { createAsyncThunk } from '@reduxjs/toolkit';

import * as userApi from '../api/user.api';
import * as userReducer from '../reducers/user.reducer';

export const firstTimeAction = createAsyncThunk('users/firsttime', async (_ , { dispatch }) => {

    try {
        
        const { data } = await userApi.firstTimeApi()
    
        dispatch(userReducer.firstTime(data))

    } catch (error) {
        console.log(error);
    }

})